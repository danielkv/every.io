import React from "react";
import { ITodo } from "../../../common/interfaces/todo";
import { TodoItem } from "../../organism/TodoItem";

import { TodosColumnContainer } from "./styles";

export type TTodosColumnProps = {
    todos: ITodo[];
    title: string;
    onEdit(todo: ITodo): void;
};

export const TodosColumn: React.FC<TTodosColumnProps> = ({ title, todos }) => {
    return (
        <TodosColumnContainer title={title}>
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </TodosColumnContainer>
    );
};
