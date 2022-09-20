import React from "react";
import { ITodo } from "../../../common/interfaces/todo";
import {
    getNewStatus,
    isFirstStatus,
    isLastStatus,
} from "../../../common/utils/todo";
import { IconButton } from "../../molecule/IconButton";

import { TodoItemContainer, TodoItemDescription } from "./styles";

export type TTodoItem = {
    todo: ITodo;
    onEdit(todo: ITodo): void;
};

export const TodoItem: React.VFC<TTodoItem> = ({ todo, onEdit }) => {
    const handleClick = (side: "left" | "right") => () => {
        const newStatus = getNewStatus(todo.status, side);
        onEdit({ ...todo, status: newStatus });
    };

    return (
        <TodoItemContainer>
            <IconButton
                onClick={handleClick("left")}
                type="arrow-left"
                color="red"
                iconColor="white"
                disabled={isFirstStatus(todo.status)}
            />
            <TodoItemDescription>{todo.description}</TodoItemDescription>
            <IconButton
                onClick={handleClick("right")}
                type="arrow-right"
                color="green"
                iconColor="white"
                disabled={isLastStatus(todo.status)}
            />
        </TodoItemContainer>
    );
};
