import React, { useEffect, useState } from "react";

import {
    IInputTodo,
    ITodo,
    TStatus,
    TTodosByStatus,
} from "../../common/interfaces/todo";
import { statusMapping } from "../../common/utils/todo";
import { Card } from "../../components/molecule/Card";
import { AddTodoForm } from "../../components/organism/AddTodoForm";
import { TodoItem } from "../../components/organism/TodoItem";
import issueService from "../../services/issue.service";

import todoService from "../../services/todo.service";
import { issueToTodo } from "../../useCases/issueToTodo";

import { TodosContainer, TodosContent, TodosFooter, NoResult } from "./styles";

export const Todos: React.FC = () => {
    const [todosByStatus, setTodosByStatus] = useState<TTodosByStatus | null>(
        null
    );

    useEffect(() => {
        async function load() {
            const issues = await issueService.get();
            todoService.set(issueToTodo(issues));
        }

        load().then(() => {
            const todosByStatus = todoService.getAll();

            setTodosByStatus(todosByStatus);
        });
    }, []);

    function handleAddTodo(todo: IInputTodo) {
        try {
            if (!todosByStatus) return;

            const addedTodo = todoService.add(todo);
            const newTodoStatus = addedTodo.status;
            const currentTodos = todosByStatus[newTodoStatus];

            setTodosByStatus({
                ...todosByStatus,
                [newTodoStatus]: [...currentTodos, addedTodo],
            });
        } catch (err) {
            console.error((err as Error).message);
        }
    }

    function handleEditTodo(updated: ITodo) {
        try {
            if (!todosByStatus) return;

            const updatedTodoResponse = todoService.edit(
                updated.id,
                updated.status
            );
            const { new: updatedTodo, old } = updatedTodoResponse;

            const updatedTodoStatus = updatedTodo.status;
            const currentTodos = todosByStatus[updatedTodoStatus];

            const oldTodoStatus = old.status;
            const oldTodos = todosByStatus[oldTodoStatus];
            const oldTodoIndex = oldTodos.findIndex(
                (todo) => todo.id === old.id
            );

            oldTodos.splice(oldTodoIndex, 1);

            setTodosByStatus({
                ...todosByStatus,
                [updatedTodoStatus]: [...currentTodos, updatedTodo],
                [oldTodoStatus]: [...oldTodos],
            });
        } catch (err) {
            console.error((err as Error).message);
        }
    }

    if (!todosByStatus) return <NoResult>No To Dos to show</NoResult>;

    return (
        <TodosContainer>
            <TodosContent>
                {Object.entries(todosByStatus).map(([_status, todos]) => {
                    const status = _status as TStatus;
                    const label = statusMapping[status];

                    return (
                        <Card key={status} title={label}>
                            {todos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    onEdit={handleEditTodo}
                                    todo={todo}
                                />
                            ))}
                        </Card>
                    );
                })}
            </TodosContent>
            <TodosFooter>
                <AddTodoForm onClick={handleAddTodo} />
            </TodosFooter>
        </TodosContainer>
    );
};
