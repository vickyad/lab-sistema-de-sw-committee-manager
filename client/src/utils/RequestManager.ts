import axios, { AxiosInstance } from 'axios'
import BackendPaths from '../constants/BackendPaths';
import { committeeGetAllAnswerEntry, memberGetAllAnswerEntry, memberGetOneMemberDetailsType } from '../types/requestAnswerTypes';

class requestManager {

    private axios_socket: AxiosInstance;

    constructor() {
        this.axios_socket = axios.create()
    }

    private async makeGetRequest(access_point: string, params:any = {}) {
        let result = await this.axios_socket
            .get(access_point, {params: params})
                .then(res => res.data)
                .catch(err => console.log(err))
        
        return result
    }

    async getAllMembers() {
        return await this.makeGetRequest(BackendPaths.MEMBER_HISTORY) as memberGetAllAnswerEntry[]
    }

    async getMemberList() {
        return await this.makeGetRequest(BackendPaths.MEMBER_OPTIONS) //TODO: Add a type to this answer when we start using it
    }

    async getAllCommittees() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_ALL) as committeeGetAllAnswerEntry[]
    }

    async getCommitteeList() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_OPTIONS) //TODO: Add a type to this answer when we start using it
    }

    async getOneCommittee(committee_id: number) {
        let params= {id: committee_id}
        return await this.makeGetRequest(BackendPaths.COMMITTEE, params=params) //TODO: Add a type to this answer when it starts being used
    }

    async getOneMember(member_id: number) {
        let params={id: member_id}
        return await this.makeGetRequest(BackendPaths.MEMBER, params=params) as memberGetOneMemberDetailsType
    }
}
export default new requestManager()