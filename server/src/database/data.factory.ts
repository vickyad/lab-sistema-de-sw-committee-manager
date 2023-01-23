import { faker } from "@faker-js/faker";
import { Committee, Member, MembersOnCommittees, Prisma } from "@prisma/client"

export class DataFactory {
    constructor() {}

    newMockMember() {
        return {
          id: +faker.random.numeric(3),
          name: faker.name.fullName(),
          is_active: faker.datatype.boolean(),
        } as Member
    }

    newMockCommittee() {
        return {
          id: +faker.random.numeric(3),
          bond: faker.commerce.department(),
          begin_date: faker.date.past(), //TODO fazer variações com valores nulos pra testar default()
          end_date: faker.date.future(),
          term: +faker.random.numeric(),
          ordinance: "Portaria " + faker.random.alphaNumeric(5),
          observations: faker.lorem.sentence(),
          is_active: true,          
        } as Committee
    }

    newMockMemberOnCommittee(mockMember?: Member, mockCommittee?: Committee) {

      if(!mockMember) mockMember = this.newMockMember()
      if(!mockCommittee) mockCommittee = this.newMockCommittee()

      return {    
        member_id: mockMember.id,
        committee_id: mockCommittee.id,
        role: faker.name.jobType(),
        assigned_at: faker.date.past(),
        begin_date: faker.date.past(),
        term: +faker.random.numeric(),
        observations: faker.lorem.sentence()
      } as MembersOnCommittees
    }
}