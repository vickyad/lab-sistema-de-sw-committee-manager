class BackendPaths {
    ROOT = 'http://localhost:3000'
    COMMITTEE = this.ROOT + '/committee'
    MEMBER = this.ROOT + '/member'
    MEMBER_ON_COMMITTEES = this.ROOT + '/member_on_committee'

    COMMITTEE_ALL = this.COMMITTEE + '/all' // In committee, '/all' will return all the committees registerd in the database.
    COMMITTEE_OPTIONS = this.COMMITTEE + '/options' // In member and committee, '/options' will return a list with the names of all registered components of that class.

    MEMBER_HISTORY = this.MEMBER + '/history' // MEMBER_HISTORY will return all members with all related member_on_committee instances.
    MEMBER_OPTIONS = this.MEMBER + '/options' 
}
export default new BackendPaths()
  