export type memberContentType = [string, number]
export type committeeContentType = [string, string, string, string, string]
export type memberCommitteesType = {

    active_participations: memberParticipation[],
    history: memberParticipation[]
}

export interface genericInstanceType {
    id: number
    content: memberContentType | committeeContentType
    committees?: memberCommitteesType
    participation_details?: committeeParticipation[]
}

export type memberParticipation = {
    id: number,
    content: [string, string, string, string]
}

export interface memberType extends genericInstanceType {

    content: memberContentType
    committees: memberCommitteesType
}

export type committeeParticipation = {
    id: number,
    content: committeeContentType
}

export interface committeeType extends genericInstanceType {

    content: committeeContentType
    participation_details:  committeeParticipation[]
}