function formatDate(date: string) {
    let formated_date: string = ""

    formated_date = date.substring(8,10) + "/" + date.substring(5,7) + "/" + date.substring(0,4)

    return formated_date
}

export function formatMember(member_list: any) {
    let formated_member_info = [] as any[]

    member_list.forEach( (member : any) => {
        let number_of_comissions = member.committees.active.length
        formated_member_info.push({
            id: member.id, 
            content: [member.name, number_of_comissions], 
            committees: formatMemberCommitteeDetails(member.committees.active, member.committees.inactive)
        })
    })

    return formated_member_info 
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
                detail.begin_date!=null ? formatDate(detail.begin_date) : '-',
                detail.observations!=null ? detail.observations : '-'
            ]})
    })

    history.forEach( (detail: any)  => {
        inactive_participations.push({
            id: detail.committee_id, 
            content: [
                detail.committee.name,
                detail.role,
                detail.begin_date!=null ? formatDate(detail.begin_date) : '-',
                detail.observations!=null ? detail.observations : '-'
            ]})
    })
    return {active_participations: active_participations, history: inactive_participations}
}

export function formatMemberOnCommitteeDetails(member_details:any, memberOnCommittee_details:any) {
    console.log(memberOnCommittee_details)
    if(memberOnCommittee_details === undefined) {
        return undefined
    }
    return {
        id: member_details.id, 
        content: [
            memberOnCommittee_details.role,
            member_details.name,
            memberOnCommittee_details.begin_date == null ? '-' : memberOnCommittee_details.begin_date,
            memberOnCommittee_details.term + 'º',
            memberOnCommittee_details.observations == null ? '-' : memberOnCommittee_details.observations
        ]
    }
}

export function formatCommittee(committee_list: any, committee_details_list: any) {
   
    let formated_committee_info = [] as any[]
    let i = 0
    
    committee_list.forEach( (committee : any) => {
        let formated_date_duration = "-"
        let committee_details = [] as any[]
    
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