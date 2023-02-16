import RequestManager from "./RequestManager"
import { formatMemberOnCommitteeDetails } from "./FormatUtils"
import { committeeParticipation } from "../types/contentTypes"
import { memberGetOneMemberDetailsType_committeeDetails, committeeGetAllAnswerEntry, committeeGetAllAnswerEntry_member, memberGetOneMemberDetailsType } from "../types/requestAnswerTypes"

export const getOneCommitteeParticipations = async (members: committeeGetAllAnswerEntry_member[], committee_id:number) => {
  let committee_details_array : committeeParticipation[] = []

  for(const member of members) {
    let member_details : memberGetOneMemberDetailsType = await RequestManager.getOneMember(member.member.id)

    let memberOnCommittee_details = member_details.committees
      .filter( (obj : memberGetOneMemberDetailsType_committeeDetails) => {
        return obj.committee_id === committee_id})
      .find( (obj: memberGetOneMemberDetailsType_committeeDetails) => {
        return obj.is_active === true
      })

    let formated_detail:(committeeParticipation|undefined) = formatMemberOnCommitteeDetails(member_details, memberOnCommittee_details)

    if(formated_detail !== undefined) {
      committee_details_array.push(formated_detail)
    }
  }

  return committee_details_array
}

export const getAndFormatAllCommitteeParticipations = async(committees_array: committeeGetAllAnswerEntry[]) => {
  let all_committee_participations : committeeParticipation[][] = []

  for (const committee_instance of committees_array){
    let committee_instance_details : committeeParticipation[] = []
    committee_instance_details = await getOneCommitteeParticipations(committee_instance.members, committee_instance.id)
    all_committee_participations.push(committee_instance_details)
  }   


  return all_committee_participations
}