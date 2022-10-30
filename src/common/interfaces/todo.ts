export type TStatus = "todo" | "progress" | "done";

export interface ITodo {
    id: string;
    status: TStatus;
    description: string;
}

export interface IInputTodo {
    description: string;
}

export type TTodosByStatus = Record<TStatus, ITodo[]>;

// {
// 	todo: [todo1, todo2],
// 	progress: [todo3, todo4],
// 	done: [todo5, todo6],
// }
