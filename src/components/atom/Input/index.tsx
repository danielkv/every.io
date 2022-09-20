import React, { InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

export type TInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<TInputProps> = (props) => {
    return (
        <InputContainer>
            <input {...props} />
        </InputContainer>
    );
};
