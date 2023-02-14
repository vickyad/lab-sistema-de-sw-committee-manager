class BackendPaths {
    ROOT = 'http://localhost:3000'
    COMMITTEE = this.ROOT + '/committee'
    MEMBER = this.ROOT + '/member'
    MEMBER_ON_COMMITTEES = this.ROOT + '/member_on_committee'

    // MEMBER_ON_COMMITTEE_LIST = this.MEMBER_ON_COMMITTEES + '/list'
    // MEMBER_ON_COMMITTEE_LIST_DETAILS = this.MEMBER_ON_COMMITTEE_LIST + '/details'

    COMMITTEE_ALL = this.COMMITTEE + '/all'
    COMMITTEE_OPTIONS = this.COMMITTEE + '/options'

    MEMBER_HISTORY = this.MEMBER + '/history'
    MEMBER_OPTIONS = this.MEMBER + '/options'
    // In member, '/all' will return all members with all related member_on_committee instances.
    // In committee, '/all' will return all the committees registerd in the database.
    // In member and committee, '/options' will return a list with the names of all registered components of that class.
    // In member_on_committee, '/list' will return a list of all active member_on_committee entries.
    // In member_on_committee, '/list/details' will return a list of all active member_on_committee entries related to specified member.
}
export default new BackendPaths()
  