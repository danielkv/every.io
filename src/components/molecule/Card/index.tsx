import React from "react";

import { CardContainer, CardContent, CardTitle } from "./styles";

export type TCardProps = {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
};

export const Card: React.FC<TCardProps> = ({
    title,
    children,
    style,
    className,
}) => {
    return (
        <CardContainer>
            {!!title && <CardTitle>{title}</CardTitle>}
            <CardContent style={style} className={className}>
                {children}
            </CardContent>
        </CardContainer>
    );
};
