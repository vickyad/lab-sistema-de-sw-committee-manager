import { faker } from '@faker-js/faker';
import { Committee, Member } from '@prisma/client';
import { CommitteeCreateDTO } from 'src/DTOs/committee.dto'
import { MemberCreateDTO } from 'src/DTOs/member.dto'
import { MemberOnCommitteeCreateDTO, MemberOnCommitteeUniqueDTO } from 'src/DTOs/member_on_committee.dto'

export class DataFactory {
   constructor() {}

   newMockMember() {
      return {
         name: faker.name.fullName(),
         is_active: faker.datatype.boolean(),
      } as MemberCreateDTO;
   }

   newMockMemberWithId() {
      const mock = this.newMockMember() as Member;
      mock.id = +faker.random.numeric(3);
      return mock;
   }

   newMockCommittee() {
      return {
         name: 'Órgão ' + faker.name.fullName(),
         bond: 'Vínculo ' + faker.commerce.department(),
         begin_date: faker.date.past(),
         end_date: faker.date.future(),
         term: +faker.random.numeric(),
         ordinance: 'Portaria ' + faker.random.alphaNumeric(5),
         observations: faker.lorem.sentence(),
         is_active: true,
      } as CommitteeCreateDTO;
   }

   newMockCommitteeWithId() {
      const mock = this.newMockCommittee() as Committee;
      mock.id = +faker.random.numeric(3);
      return mock;
   }

   newMockMemberOnCommittee(mockMember?: Member, mockCommittee?: Committee) {
      if (!mockMember) mockMember = this.newMockMemberWithId();
      if (!mockCommittee) mockCommittee = this.newMockCommitteeWithId();

      return {
         where: {
            member_id: mockMember.id,
            committee_id: mockCommittee.id,
         } as MemberOnCommitteeUniqueDTO,
         data: {
            role: faker.name.jobType(),
            begin_date: faker.date.past(),
            term: +faker.random.numeric(),
            observations: faker.lorem.sentence(),
         } as MemberOnCommitteeCreateDTO
      }
   }
}
