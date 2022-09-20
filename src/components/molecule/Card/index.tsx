import React from "react";

import { CardContainer, CardContent, CardTitle } from "./styles";

export type TCardProps = {
    title?: string;
};

export const Card: React.FC<TCardProps> = ({ title, children }) => {
    return (
        <CardContainer>
            {!!title && <CardTitle>{title}</CardTitle>}
            <CardContent>{children}</CardContent>
        </CardContainer>
    );
};
