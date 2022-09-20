import React from "react";

import { FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import { IconType } from "react-icons";
import { TIconsType } from "../../../common/types/icons";

export type TArrowIcon = {
    type: TIconsType;
    size?: string | number;
    color?: string;
};

export const Icon: React.FC<TArrowIcon> = ({ type, size, color }) => {
    const icons: Record<TIconsType, IconType> = {
        "arrow-left": FaArrowLeft,
        "arrow-right": FaArrowRight,
        plus: FaPlus,
    };

    const IconComponent = icons[type];

    return <IconComponent size={size} color={color} />;
};
