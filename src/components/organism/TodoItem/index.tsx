import React from "react";
import { ITodo } from "../../../common/interfaces/todo";
import { IconButton } from "../../molecule/IconButton";

import { TodoItemContainer, TodoItemDescription } from "./styles";

export type TTodoItem = {
    todo: ITodo;
    onEdit(todo: ITodo): void;
};

export const TodoItem: React.VFC<TTodoItem> = ({ todo, onEdit }) => {
    function handleRightClick() {
        //onEdit({...todo, status: })
    }
    function handleLeftClick() {}

    return (
        <TodoItemContainer>
            <IconButton
                onClick={handleLeftClick}
                type="arrow-left"
                color="red"
                iconColor="white"
            />
            <TodoItemDescription>{todo.description}</TodoItemDescription>
            <IconButton
                onClick={handleRightClick}
                type="arrow-right"
                color="green"
                iconColor="white"
            />
        </TodoItemContainer>
    );
};
