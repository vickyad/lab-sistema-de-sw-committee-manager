import { committeeParticipation, committeeType, memberParticipation, memberType } from "../types/contentTypes"
import { committeeDetails, committeeGetAllAnswerEntry, committeeGetAllAnswerMemberEntry, committeeMemberDetailsAnswer, memberDetails, memberGetAllAnswerEntry } from "../types/requestAnswerTypes"

function formatDate(date: string) {
    let formated_date: string = ""

    formated_date = date.substring(8,10) + "/" + date.substring(5,7) + "/" + date.substring(0,4)

    return formated_date
}

export function formatMember(member_list: memberGetAllAnswerEntry[]) {
    let formated_member_info : memberType[] = []

    member_list.forEach( (member : memberGetAllAnswerEntry) => {
        let number_of_comissions = member.committees.active.length
        formated_member_info.push({
            id: member.id, 
            content: [member.name, number_of_comissions], 
            committees: formatMemberCommitteeDetails(member.committees.active, member.committees.inactive)
        })
    })

    return formated_member_info 
}

function formatMemberCommitteeDetails(active: memberDetails[], history: memberDetails[]){

    let active_participations : memberParticipation[] = []
    let inactive_participations : memberParticipation[] = []
    
    active.forEach( (detail: memberDetails)  => {
        active_participations.push({
            id: detail.committee.id, 
            content: [
                detail.committee.name,
                detail.role,
                detail.begin_date!=null ? formatDate(detail.begin_date) : '-',
                detail.observations!=null ? detail.observations : '-'
            ]})
    })

    history.forEach( (detail: memberDetails)  => {
        inactive_participations.push({
            id: detail.committee.id, 
            content: [
                detail.committee.name,
                detail.role,
                detail.begin_date!=null ? formatDate(detail.begin_date) : '-',
                detail.observations!=null ? detail.observations : '-'
            ]})
    })
    return {active_participations: active_participations, history: inactive_participations}
}

export function formatMemberOnCommitteeDetails(member_details:committeeMemberDetailsAnswer, memberOnCommittee_details:committeeDetails|undefined) {
    console.log(memberOnCommittee_details)
    if(memberOnCommittee_details === undefined) {
        return undefined
    }
    return {
        id: member_details.id, 
        content: [
            memberOnCommittee_details.role,
            member_details.name,
            memberOnCommittee_details.begin_date == null ? '-' : formatDate(memberOnCommittee_details.begin_date),
            memberOnCommittee_details.term + 'º',
            memberOnCommittee_details.observations == null ? '-' : memberOnCommittee_details.observations
        ]
    } as committeeParticipation
}

export function formatCommittee(committee_list: committeeGetAllAnswerEntry[], committee_details_list: committeeParticipation[][]) {
   
    let formated_committee_info : committeeType[] = []
    let i = 0
    
    committee_list.forEach( (committee : committeeGetAllAnswerEntry) => {
        let formated_date_duration : string = "-"
        let committee_details : committeeParticipation[] = []
    
        if(committee.begin_date != null && committee.end_date != null){
            formated_date_duration = formatDate(committee.begin_date) + " a " + formatDate(committee.end_date)
        }
    
        formated_committee_info.push({
                                id: committee.id, 
                                content: [committee.name, 
                                    committee.bond, 
                                    committee.ordinance, 
                                    formated_date_duration,
                                    committee.term + "°"],
                                participation_details: committee_details_list[i]})
        
        i = i+1
    })
    
    return formated_committee_info
}