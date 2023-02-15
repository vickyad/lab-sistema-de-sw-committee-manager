import RequestManager from "./RequestManager"
import { formatMemberOnCommitteeDetails } from "./FormatUtils"
import { committeeParticipation } from "../types/contentTypes"

export const getOneCommitteeParticipations = async (members:any, committee_id:number) => {
  let committee_details_array:any[] = []

  for(const member of members) {
    let member_details = await RequestManager.getOneMember(member.member.id)

    let memberOnCommittee_details = member_details.committees.filter( (obj : any) => {
      return obj.committee_id === committee_id
    })

    memberOnCommittee_details = memberOnCommittee_details.find( (obj: any) => {
      return obj.is_active === true
    })

    let formated_detail = formatMemberOnCommitteeDetails(member_details, memberOnCommittee_details)

    if(formated_detail !== undefined) {
      committee_details_array.push(formated_detail)
    }
  }

  return committee_details_array as any[]
}

export const getAndFormatAllCommitteeParticipations = async(committees_array:any) => {
  let all_committee_participations:committeeParticipation[][] = []

  for (const committee_instance of committees_array){
    let committee_instance_details:committeeParticipation[] = []
    committee_instance_details = await getOneCommitteeParticipations(committee_instance.members, committee_instance.id)
    all_committee_participations.push(committee_instance_details)

  }   


  return all_committee_participations
}