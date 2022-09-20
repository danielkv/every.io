import React from "react";
import { TIconsType } from "../../../common/types/icons";
import { Icon } from "../../atom/Icon";

import { IconButtonContainer } from "./styles";

export type IconButtonProps = {
    type: TIconsType;
    iconColor?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

export const IconButton: React.VFC<IconButtonProps> = ({
    type,
    iconColor,
    color,
    onClick,
    disabled,
}) => {
    return (
        <IconButtonContainer
            disabled={disabled}
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            <Icon type={type} color={iconColor} />
        </IconButtonContainer>
    );
};
