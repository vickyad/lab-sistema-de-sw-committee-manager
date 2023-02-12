import { useState } from "react"
import MainTable from "../components/ExportableTable/MainTable"
import RequestManager from "./RequestManager"
import { IMainTable } from "../components/Table/MainTable/types"
import { TableTypesExtended } from "../types/tableTypes"
import { member_details_mock } from "../_mock/members"

function formatDate(date: string) {
    let formated_date: string = ""

    formated_date = date.substring(8,10) + "/" + date.substring(5,7) + "/" + date.substring(0,4)

    return formated_date
}

export function formatMember(member_list: any) {
    let formated_member_info = [] as any[]

    member_list.forEach( (member : any) => {
        let number_of_comissions = member.committees.length
        formated_member_info.push({id: member.id, content: [member.name, number_of_comissions]})
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