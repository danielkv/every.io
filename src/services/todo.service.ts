import { IUpdateResponse } from "../common/interfaces/requests";
import {
    IInputTodo,
    ITodo,
    TStatus,
    TTodosByStatus,
} from "../common/interfaces/todo";
import { statusMapping } from "../common/utils/todo";

export type TTodoFilter = {
    status: TStatus;
};

class TodoService {
    private todos: ITodo[] = [
        {
            id: "1",
            description: "Pull Weeds",
            status: "progress",
        },
        {
            id: "2",
            description: "Rake the leaves",
            status: "done",
        },
        {
            id: "3",
            description: "Mow the lawn",
            status: "todo",
        },
    ];
    private initialStatus: TStatus = "todo";

    get(filter: TTodoFilter): ITodo[] {
        return this.todos.filter((todo) => todo.status === filter.status);
    }

    getAll(): TTodosByStatus {
        return Object.keys(statusMapping).reduce<TTodosByStatus>(
            (acc, _status) => {
                const status = _status as TStatus;
                const todos = this.get({ status });

                if (acc[status]) acc[status].push(...todos);
                else acc[status] = todos;

                return acc;
            },
            {} as TTodosByStatus
        );
    }

    add(newTodo: IInputTodo): ITodo {
        const todo: ITodo = {
            ...newTodo,
            id: String(Math.round(Math.random() * 100000)),
            status: this.initialStatus,
        };

        this.todos.push(todo);

        return todo;
    }

    edit(id: string, newStatus: TStatus): IUpdateResponse<ITodo> {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex < 0) throw new Error("Todo not found");

        const oldTodoSnapshot = { ...this.todos[todoIndex] };
        this.todos[todoIndex].status = newStatus;

        return {
            old: oldTodoSnapshot,
            new: this.todos[todoIndex],
        };
    }

    set(_todos: ITodo[]) {
        this.todos = _todos;
    }
}

export default new TodoService();
