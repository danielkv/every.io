import React from "react";

export type TTitleProps = {
    children: string;
};

export const Title: React.FC<TTitleProps> = ({ children }) => {
    return <h1>{children}</h1>;
};
