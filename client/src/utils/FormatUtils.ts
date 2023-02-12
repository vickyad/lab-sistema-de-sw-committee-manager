import RequestManager from "./RequestManager"

function formatDate(date: string) {
    let formated_date: string = ""

    formated_date = date.substring(8,10) + "/" + date.substring(5,7) + "/" + date.substring(0,4)

    return formated_date
}

export function formatMember(member_list: any) {
    let formated_member_info = [] as any[]

    member_list.forEach( (member : any) => {
        let number_of_comissions = member.committees.length
        formated_member_info.push({
            id: member.id, 
            content: [member.name, number_of_comissions], 
            committees: formatMemberCommitteeDetails(member.committees, [])
        })
    })

    return formated_member_info 
}

export function formatCommittee(committee_list: any) {
   
    let formated_committee_info = [] as any[]
    
    committee_list.forEach( (committee : any) => {
        let formated_date_duration = "-"
    
        if(committee.begin_date != null && committee.end_date != null){
        formated_date_duration = formatDate(committee.begin_date) + " a " + formatDate(committee.end_date)
        }
    
        formated_committee_info.push({id: committee.id, 
                                content: [committee.name, 
                                    committee.bond, 
                                    committee.ordinance, 
                                    formated_date_duration,
                                    committee.term + "°"]})
    })
    
    return formated_committee_info
}

function formatMemberCommitteeDetails(active: any[], history: any[]){

    let active_participations = [] as any[]
    let inactive_participations = [] as any[]
    
    active.forEach( (detail: any)  => {
        active_participations.push({
            id: detail.committee_id, 
            content: [
                detail.committee.name,
                detail.role,
                '-',
                '-'
            ]})
    })

    history.forEach( (detail: any)  => {
        inactive_participations.push({
            id: detail.committee_id, 
            content: [
                detail.committee.name,
                detail.role,
                '-',
                '-'
            ]})
    })
    return {active_participations: active_participations, history: inactive_participations}
}