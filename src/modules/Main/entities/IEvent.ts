export interface IEvent {
    id: string;
    type: string;
    public: boolean;
    created_at: string;
    actor?: IActor;
    repo?: IRepo;
    payload?: IPayload;
    org?: IOrg;
}

interface IActor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

interface IRepo {
    id: number;
    name: string;
    url: string;
}

interface IPayload {
    push_id: number;
    size: number;
    distinct_size: number;
    ref: string;
    head: string;
    before: string;
    commits: [];
}

interface IOrg {
    id: number;
    login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}
