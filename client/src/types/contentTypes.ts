export interface genericInstanceType {
    id: number
    content: any
    committees?: any
    participation_details?: any
}

export type memberParticipation = {
    id: number,
    content: [string, string, string, string]
}

export interface memberType extends genericInstanceType {

    content: [string, number]
    committees: {
        active_participations: memberParticipation[],
        history: memberParticipation[]
    }
}

export type committeeParticipation = {
    id: number,
    content: [string, string, string, string, string]
}

export interface committeeType extends genericInstanceType {

    content: [string, string, string, string, string] 
    participation_details:  committeeParticipation[]
}