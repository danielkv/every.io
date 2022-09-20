import React, { InputHTMLAttributes } from "react";

import { InputField } from "./styles";

export type TInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<TInputProps> = (props) => {
    return <InputField {...props} />;
};
