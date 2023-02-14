import RequestManager from "./RequestManager"
import { formatMemberOnCommitteeDetails } from "./FormatUtils"

export const committeeMembersIteratorFunction = async (members:any, committee_id:number, committee_details_array:any) => {

    for(const member of members) {
      let member_details = await RequestManager.getOneMember(member.member.id)

      let memberOnCommittee_details = member_details.committees.find( (obj : any) => {
        return obj.committee_id === committee_id
      })

      committee_details_array.push(formatMemberOnCommitteeDetails(member_details, memberOnCommittee_details))
    }
}

export const committeeIteratorFunction = async(committees_array:any, committees_array_destination:any) => {
    for (const committee_instance of committees_array){
        let committee_instance_details = [] as any[]
        committeeMembersIteratorFunction(committee_instance.members, committee_instance.id, committee_instance_details)
        committees_array_destination.push(committee_instance_details)
    }   
}