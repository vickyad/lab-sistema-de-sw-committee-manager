export interface committeeMemberDetailsAnswer {
    id: number,
    name: string,
    is_active: boolean,
    committees: committeeDetails[]
}

export type committeeDetails = {
    member_id: number,
    committee_id: number,
    role: string,
    begin_date?: string,
    term: number,
    observations?: string,
    is_active: boolean
}

export interface committeeGetAllAnswerMemberEntry {
    member:{
        id: number,
        name: string,
        is_active: boolean
    } 
}

export interface committeeGetAllAnswerEntry {
    id: number,
    bond: string,
    name: string, 
    begin_date?: string,
    end_date?: string,
    term: number,
    ordinance: string,
    observations?: string,
    members: committeeGetAllAnswerMemberEntry[]
}

export type memberDetails = {
    role: string,
    begin_date?: string,
    observations?: string,
    committee: {
        id: number,
        name: string
    }
}

export interface memberGetAllAnswerEntry {
    id: number,
    name: string,
    committees: {
        active: memberDetails[],
        inactive: memberDetails[]
    }
}