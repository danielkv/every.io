import { IIssue } from "../common/interfaces/issues";
import { ITodo } from "../common/interfaces/todo";

export function issueToTodo(issues: IIssue[]): ITodo[] {
    return issues.map((issue) => ({
        id: String(issue.id),
        status: issue.state === "closed" ? "done" : "todo",
        description: issue.title,
    }));
}
