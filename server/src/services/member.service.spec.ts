import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from './member.service';
import { PrismaService } from '../database/prisma.service';
import { DataFactory } from '../database/data.factory';
import { CreateMemberDTO } from 'src/DTOs';

describe('MemberService', () => {
   let memberService: MemberService;
   let prismaService: PrismaService;

   const factory = new DataFactory();

   const mockMember: CreateMemberDTO = {
      name: 'Test Name',
      is_active: false,
   };

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         providers: [MemberService, PrismaService],
      }).compile();

      memberService = module.get<MemberService>(MemberService);
      prismaService = module.get<PrismaService>(PrismaService);
   });

   describe('create', () => {
      it('should call prismaService.create', async () => {
         jest.spyOn(prismaService.member, 'create').mockImplementationOnce((): any => undefined);

         await memberService.create(factory.newMockMember());

         expect(prismaService.member.create).toBeCalled();
      });

      it('should create and return member', async () => {
         const member = await memberService.create(factory.newMockMember());

         expect(member).toBeDefined();
      });

      it('should create and return member with is_Active default value', async () => {
         const mock = factory.newMockMember();
         mock.is_active = undefined;

         const member = await memberService.create(mock);

         expect(member.is_active).toBe(true);
      });

      it('should create and return member w/ the correct attr values', async () => {
         const member = await memberService.create(mockMember);

         expect(member.name).toEqual(mockMember.name);
         expect(member.is_active).toBe(mockMember.is_active);
      });
   });

   describe('findById', () => {
      it('should call prismaService.findUnique', async () => {
         jest
            .spyOn(prismaService.member, 'findUnique')
            .mockImplementationOnce((): any => undefined);

         await memberService.member({
            where: { id: factory.newMockMemberWithId().id },
         });

         expect(prismaService.member.findUnique).toBeCalled();
      });

      it('should find Member', async () => {
         const member = await memberService.create(factory.newMockMember());

         const response = await memberService.member({
            where: { id: member.id },
         });

         expect(response && response.id).toEqual(member.id);
      });
   });

   describe('update', () => {
      it('should call prismaService.update', async () => {
         jest.spyOn(prismaService.member, 'update').mockImplementationOnce((): any => undefined);

         await memberService.update({
            where: { id: factory.newMockMemberWithId().id },
            data: { name: 'Updated Name' },
         });

         expect(prismaService.member.update).toBeCalled();
      });

      it('should update and return member with the correct attr values', async () => {
         const updatedMock = { name: 'Updated Name', is_active: true };

         let member = await memberService.create(mockMember);

         member = await memberService.update({
            where: { id: member.id },
            data: updatedMock,
         });

         expect(member.name).toEqual(updatedMock.name);
         expect(member.is_active).toBe(updatedMock.is_active);
      });
   });

   describe('delete', () => {
      it('should call prismaService.delete', async () => {
         jest.spyOn(prismaService.member, 'delete').mockImplementationOnce((): any => undefined);

         await memberService.delete({
            id: factory.newMockMemberWithId().id,
         });

         expect(prismaService.member.delete).toBeCalled();
      });

      it('should delete', async () => {
         const member = await memberService.create(mockMember);

         const response = await memberService.delete({
            id: member.id,
         });

         expect(response.id).toEqual(member.id);
      });
   });
});
