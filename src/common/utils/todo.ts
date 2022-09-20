import { TStatus } from "../interfaces/todo";

export const statusMapping: Record<TStatus, string> = {
    todo: "To Do",
    progress: "In Progress",
    done: "Done",
};

export const statusOrder: TStatus[] = ["todo", "progress", "done"];

function getStatusPosition(status: TStatus): number {
    const position = statusOrder.findIndex((stat) => stat === status);
    if (position < 0) throw new Error("Status not found");

    return position;
}

function getNewStatusPosition(
    fromPosition: number,
    side: "left" | "right"
): number {
    if (side === "right")
        return fromPosition + 1 > statusOrder.length - 1 ? 0 : fromPosition + 1;

    return fromPosition - 1 < 0 ? statusOrder.length - 1 : fromPosition - 1;
}

export function getNewStatus(
    fromStatus: TStatus,
    side: "left" | "right"
): TStatus {
    const currentPosition = getStatusPosition(fromStatus);
    const newPosition = getNewStatusPosition(currentPosition, side);

    return statusOrder[newPosition];
}

export function isLastStatus(status: TStatus): boolean {
    const currentPosition = getStatusPosition(status);

    return currentPosition === statusOrder.length - 1;
}

export function isFirstStatus(status: TStatus): boolean {
    const currentPosition = getStatusPosition(status);

    return currentPosition === 0;
}
