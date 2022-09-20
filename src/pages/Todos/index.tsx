import React, { useEffect, useState } from "react";

import {
    IInputTodo,
    statusMapping,
    TStatus,
    TTodosByStatus,
} from "../../common/interfaces/todo";
import { AddTodoForm } from "../../components/organism/AddTodoForm";
import { TodosColumn } from "../../components/template/TodosColumn";
import todoService from "../../services/todo.service";

import { TodosContainer, TodosContent, TodosFooter, NoResult } from "./styles";

export const Todos: React.FC = () => {
    const [todosByStatus, setTodosByStatus] = useState<TTodosByStatus | null>(
        null
    );

    useEffect(() => {
        const todosByStatus = todoService.getAll();

        setTodosByStatus(todosByStatus);
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

    if (!todosByStatus) return <NoResult>No To Dos to show</NoResult>;

    return (
        <TodosContainer>
            <TodosContent>
                {Object.entries(todosByStatus).map(([_status, todos]) => {
                    const status = _status as TStatus;
                    const label = statusMapping[status];

                    return <TodosColumn title={label} todos={todos} />;
                })}
            </TodosContent>
            <TodosFooter>
                <AddTodoForm onClick={handleAddTodo} />
            </TodosFooter>
        </TodosContainer>
    );
};
