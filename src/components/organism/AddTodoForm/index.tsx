import React, { ChangeEventHandler, useState } from "react";
import { IInputTodo, ITodo } from "../../../common/interfaces/todo";
import { Input } from "../../atom/Input";
import { IconButton } from "../../molecule/IconButton";

import { AddTodoFormContainer } from "./styles";

export type TAddTodoForm = {
    onClick(todo: IInputTodo): void;
};

export const AddTodoForm: React.FC<TAddTodoForm> = ({ onClick }) => {
    const [text, setText] = useState("");

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    };

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        const newTodo: IInputTodo = {
            description: text,
        };

        onClick(newTodo);

        setText("");
    };

    return (
        <AddTodoFormContainer>
            <form>
                <Input value={text} onChange={onChange} />
                <IconButton
                    onClick={handleClick}
                    type="plus"
                    color="blue"
                    iconColor="white"
                />
            </form>
        </AddTodoFormContainer>
    );
};
