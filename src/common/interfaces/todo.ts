export type TStatus = "todo" | "progress" | "done";

export const statusMapping: Record<TStatus, string> = {
    todo: "To Do",
    progress: "In Progress",
    done: "Done",
};

export interface ITodo {
    id: string;
    status: TStatus;
    description: string;
}

export interface IInputTodo {
    description: string;
}

export type TTodosByStatus = Record<TStatus, ITodo[]>;
