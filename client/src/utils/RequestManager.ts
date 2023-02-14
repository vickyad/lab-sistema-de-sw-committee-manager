import axios, { AxiosInstance } from 'axios'
import BackendPaths from '../constants/BackendPaths';

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
        let params={id: 5}
        await this.makeGetRequest(BackendPaths.MEMBER, params=params)
        return await this.makeGetRequest(BackendPaths.MEMBER_HISTORY)
    }

    async getMemberList() {
        return await this.makeGetRequest(BackendPaths.MEMBER_OPTIONS)
    }

    async getAllCommittees() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_ALL)
    }

    async getCommitteeList() {
        return await this.makeGetRequest(BackendPaths.COMMITTEE_OPTIONS)
    }

    async getOneCommittee(committee_id: number) {
        let params= {id: committee_id}
        return await this.makeGetRequest(BackendPaths.COMMITTEE, params=params)
    }

    async getOneMember(member_id: number) {
        let params={id: member_id}
        // console.log(member_id)
        return await this.makeGetRequest(BackendPaths.MEMBER, params=params)
    }

    // async getMembersOnCommitteeList() {
    //     return await this.makeGetRequest(BackendPaths.MEMBER_ON_COMMITTEE_LIST)
    // }

    // async getMembersOnCommitteeDetails(member_id: number) {
    //     let params={member_id: member_id}
    //     return await this.makeGetRequest(BackendPaths.MEMBER_ON_COMMITTEE_LIST_DETAILS, params=params)
    // }
}
export default new requestManager()