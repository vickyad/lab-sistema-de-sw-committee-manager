import RequestManager from "./RequestManager"

export function formatMember(member_list: any) {
    let formated_member_info = [] as any[]

    console.log("c")
    console.log(formated_member_info)

    member_list.forEach( (member : any) => {
        let number_of_comissions = member.committees.length
        formated_member_info.push({id: member.id, content: [member.name, number_of_comissions]})
    })

    return formated_member_info 
}
