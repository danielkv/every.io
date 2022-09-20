import styled from "styled-components";

export const IconButtonContainer = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;

    &:not(:disabled):hover {
        cursor: pointer;
        outline: 2px solid #ccc;
    }
    &:disabled {
        opacity: 0.3;
    }
`;
