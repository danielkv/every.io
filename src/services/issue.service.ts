import { IIssue } from "../common/interfaces/issues";

class IssueService {
    async get(): Promise<IIssue[]> {
        const url =
            "https://api.github.com/repos/every-io/demo-issues/issues?state=all";

        const response = await fetch(url);

        return response.json() as Promise<IIssue[]>;
    }
}

export default new IssueService();
