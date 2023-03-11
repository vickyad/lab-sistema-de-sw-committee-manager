import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import BackendPaths from '../constants/BackendPaths';
import { committeeGetAllAnswerEntry, memberGetAllAnswerEntry, memberGetOneMemberDetailsType, memberGetOptionsEntry, memberOnCommittee_PatchDTO, memberPostDTO } from '../types/requestAnswerTypes';

class requestManager {

    private axios_socket: AxiosInstance;

    constructor() {
        this.axios_socket = axios.create()
    }

    private async makeGetRequest(access_point: string, params:any = {}) { //TODO: Give 'params' a type, an amalgam of possible types.
        let result = await this.axios_socket
            .get(access_point, {params: params})
                .then(res => res.data)
                .catch(err => console.log(err))
        
        return result
    }

    private async makePostRequest(access_point: string, data:any) { //TODO: Give 'data' a type, an amalgam of possible types.
        let result = await this.axios_socket
            .post(access_point, data)
                .then(res => res.data)
                .catch(err => console.log(err))

        return result
    }

    private async makeDeleteRequest(access_point: string, params:any) { //TODO: Give 'params' a type, an amalgam of possible types.
        let result = await this.axios_socket
            .delete(access_point, params=params)
                .then(res => res.data)
                .catch(err => console.log(err))
    }

    private async makePatchRequest(access_point: string, params:any, data:any) { //TODO: Give 'params' a type, an amalgam of possible types.
        let result = await this.axios_socket
            .patch(access_point, data, {params:params})
                .then(res => res.data)
                .catch(err => console.log(err))

        return result
    }

    async getAllMembers() {
        return await this.makeGetRequest(BackendPaths.MEMBER_HISTORY) as memberGetAllAnswerEntry[]
    }

    async getMemberList() {
        return await this.makeGetRequest(BackendPaths.MEMBER_OPTIONS) as memberGetOptionsEntry[]
    }

    async getOneMember(member_id: number) {
        let params={id: member_id}
        return await this.makeGetRequest(BackendPaths.MEMBER, params=params) as memberGetOneMemberDetailsType
    }

    async getAllCommittees() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_ALL) as committeeGetAllAnswerEntry[]
    }

    async getCommitteeList() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_OPTIONS) //TODO: Add a type to this answer when we start using it
    }

    async getOneCommittee(committee_id: number) { //TODO: Add a type for each type of 'params'.
        let params= {id: committee_id}
        return await this.makeGetRequest(BackendPaths.COMMITTEE, params=params) //TODO: Add a type to this answer when it starts being used
    }

    async createMember(member_name: string) { //TODO: What type should POST, PATCH, and DELETE functions return?
        let data={data: {name: member_name, is_active: true}} as memberPostDTO
        return await this.makePostRequest(BackendPaths.MEMBER, data=data)
    }

    async updateMemberOnCommittee(member_id: number, committee_id: number, data_memberoncommittee: memberOnCommittee_PatchDTO) { 
        let params= {member_id: member_id, committee_id: committee_id}
        let data={data: data_memberoncommittee}
        return await this.makePatchRequest(BackendPaths.MEMBER_ON_COMMITTEES, params=params, data=data)
    }

    async deleteMember(member_id: number) {
        let params={id: member_id}
        return await this.makeDeleteRequest(BackendPaths.MEMBER, params=params)
    }

    async deactivateMember(member_info: memberGetOptionsEntry) { // TODO: Declare an interface to be used here and in OptionsMenu.
        let params={id: member_info.id}
        let data={data: {name: member_info.name, is_active: false}} as memberPostDTO
        return await this.makePatchRequest(BackendPaths.MEMBER, params=params, data=data)
    }

    async debug_reactivateMember(member_info: memberGetOptionsEntry) { // TODO: Verify whether this function will be necessary
        let params={id: member_info.id}
        let data={data: {name: member_info.name, is_active: true}} as memberPostDTO
        return await this.makePatchRequest(BackendPaths.MEMBER, params=params, data=data)
    }

    // async postCommitttee() {

    // }
}
export default new requestManager()