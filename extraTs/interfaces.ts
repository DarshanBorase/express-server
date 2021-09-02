export interface Users  {
    [index: number]: { traineeEmail: string, reviewerEmail: string};
}
export interface Permission {
    [key: string]: {
        all: string[],
        read: string[],
        write: string[];
        delete: string[],
    };
}