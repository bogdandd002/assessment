export interface Rams {

    id: number,
    name: string,
    subcon: string,
    rev: number,
    rev_date: Date,
    status: {
        approved: boolean,
        rejected_w_comments: boolean,
        revised_waiting_comments: boolean    
    }
    file_location: string
}
