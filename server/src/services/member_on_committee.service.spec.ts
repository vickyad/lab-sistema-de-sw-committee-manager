import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../database/prisma.service';
import { DataFactory } from '../database/data.factory';
import { MemberOnCommitteeService } from './member_on_committee.service';
import { CommitteeService } from './committee.service';
import { MemberService } from './member.service';
import { MemberOnCommitteeInfoDTO } from 'src/DTOs/member_on_committee.dto'

describe('MemberOnCommitteeService', () => {
   let memberService: MemberService;
   let committeeService: CommitteeService;
   let memberOnCommitteeService: MemberOnCommitteeService;
   let prismaService: PrismaService;

   const factory = new DataFactory();

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         providers: [MemberService, CommitteeService, MemberOnCommitteeService, PrismaService],
      }).compile();

      memberService = module.get<MemberService>(MemberService);
      committeeService = module.get<CommitteeService>(CommitteeService);
      memberOnCommitteeService = module.get<MemberOnCommitteeService>(MemberOnCommitteeService);
      prismaService = module.get<PrismaService>(PrismaService);
   });

   describe('create', () => {
      it('should call prismaService.create', async () => {
         jest
            .spyOn(prismaService.memberOnCommittee, 'create')
            .mockImplementationOnce((): any => undefined);

         const mock = factory.newMockMemberOnCommittee();

         await memberOnCommitteeService.create({
            ...mock.data,
            member: { connect: { id: mock.where.member_id } },
            committee: { connect: { id: mock.where.committee_id } },
         });

         expect(prismaService.memberOnCommittee.create).toBeCalled();
      });

      it('should create', async () => {
         const member = await memberService.create(factory.newMockMember());
         const com = await committeeService.create(factory.newMockCommittee());

         const mock = factory.newMockMemberOnCommittee(member, com);

         const response = await memberOnCommitteeService.create({
            ...mock.data,
            member: { connect: { id: mock.where.member_id } },
            committee: { connect: { id: mock.where.committee_id } },
         });

         expect(response).toBeDefined();         
      });
   });

   describe('findById', () => {
      it('should call prismaService.findUnique', async () => {
         jest
            .spyOn(prismaService.memberOnCommittee, 'findUnique')
            .mockImplementationOnce((): any => undefined);

         const mock = factory.newMockMemberOnCommittee();

         await memberOnCommitteeService.memberOnCommittee({
            where: {
               member_id_committee_id: {
                  member_id: mock.where.member_id,
                  committee_id: mock.where.committee_id,
               },
            },
         });

         expect(prismaService.memberOnCommittee.findUnique).toBeCalled();
      });
   });

   describe('update', () => {
      it('should call prismaService.update', async () => {
         jest
            .spyOn(prismaService.memberOnCommittee, 'update')
            .mockImplementationOnce((): any => undefined);

         const mock = factory.newMockMemberOnCommittee();

         await memberOnCommitteeService.update({
            where: {
               member_id_committee_id: {
                  member_id: mock.where.member_id,
                  committee_id: mock.where.committee_id,
               },
            },
            data: { observations: 'Updated observations' },
         });

         expect(prismaService.memberOnCommittee.update).toBeCalled();
      });
   });

   describe('delete', () => {
      it('should call prismaService.delete', async () => {
         jest
            .spyOn(prismaService.memberOnCommittee, 'delete')
            .mockImplementationOnce((): any => undefined);

         const mock = factory.newMockMemberOnCommittee();

         await memberOnCommitteeService.delete({
            member_id_committee_id: {
               member_id: mock.where.member_id,
               committee_id: mock.where.committee_id,
            },
         });

         expect(prismaService.memberOnCommittee.delete).toBeCalled();
      });
   });
});
