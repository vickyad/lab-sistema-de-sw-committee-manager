import { faker } from '@faker-js/faker';
import { Committee, Member, MemberOnCommittee, Prisma } from '@prisma/client';
import { CreateCommitteeDTO, CreateMemberDTO } from 'src/DTOs';

export class DataFactory {
   constructor() {}

   newMockMember() {
      return {
         name: faker.name.fullName(),
         is_active: faker.datatype.boolean(),
      } as CreateMemberDTO;
   }

   newMockMemberWithId() {
      const mock = this.newMockMember() as Member;
      mock.id = +faker.random.numeric(3);
      return mock;
   }

   newMockCommittee() {
      return {
         bond: faker.commerce.department(),
         begin_date: faker.date.past(), //TODO fazer variações com valores nulos pra testar default()
         end_date: faker.date.future(),
         term: +faker.random.numeric(),
         ordinance: 'Portaria ' + faker.random.alphaNumeric(5),
         observations: faker.lorem.sentence(),
         is_active: true,
      } as CreateCommitteeDTO;
   }

   newMockCommitteeWithId() {
      const mock = this.newMockCommittee() as Committee;
      mock.id = +faker.random.numeric(3);
      return mock;
   }

   newMockMemberOnCommitteeWithId(mockMember?: Member, mockCommittee?: Committee) {
      if (!mockMember) mockMember = this.newMockMemberWithId();
      if (!mockCommittee) mockCommittee = this.newMockCommitteeWithId();

      return {
         member_id: mockMember.id,
         committee_id: mockCommittee.id,
         role: faker.name.jobType(),
         assigned_at: faker.date.past(),
         begin_date: faker.date.past(),
         term: +faker.random.numeric(),
         observations: faker.lorem.sentence(),
      } as MemberOnCommittee;
   }
}
