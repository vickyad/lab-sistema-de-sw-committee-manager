import { Test, TestingModule } from '@nestjs/testing';
import { CommitteeService } from './committee.service';
import { PrismaService } from '../database/prisma.service';
import { DataFactory } from '../database/data.factory';
import { CreateCommitteeDTO } from 'src/DTOs';

describe('CommitteeService', () => {
   let committeeService: CommitteeService;
   let prismaService: PrismaService;

   const factory = new DataFactory();

   const mockCom = factory.newMockCommittee();

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         providers: [CommitteeService, PrismaService],
      }).compile();

      committeeService = module.get<CommitteeService>(CommitteeService);
      prismaService = module.get<PrismaService>(PrismaService);
   });

   describe('create', () => {
      it('should call prismaService.create', async () => {
         jest.spyOn(prismaService.committee, 'create').mockImplementationOnce((): any => undefined);

         await committeeService.create(factory.newMockCommittee());

         expect(prismaService.committee.create).toBeCalled();
      });

      it('should create and return committee w/ the correct attr values', async () => {
         const com = await committeeService.create(mockCom);

         expect(com.name).toEqual(mockCom.name);
         expect(com.is_active).toEqual(mockCom.is_active);
         expect(com.bond).toEqual(mockCom.bond);
         expect(com.begin_date).toEqual(mockCom.begin_date);
         expect(com.end_date).toEqual(mockCom.end_date);
         expect(com.observations).toEqual(mockCom.observations);
         expect(com.ordinance).toEqual(mockCom.ordinance);
         expect(com.term).toEqual(mockCom.term);
      });

      it('should create and return committee w/ the correct default values', async () => {
         const mockDefaults = {
            name: mockCom.name,
            bond: mockCom.bond,
         } as CreateCommitteeDTO;

         const com = await committeeService.create(mockDefaults);

         expect(com.bond).toEqual(mockDefaults.bond);
         expect(com.name).toEqual(mockDefaults.name);
         expect(com.is_active).toEqual(true);
         expect(com.begin_date).toEqual(null);
         expect(com.end_date).toEqual(null);
         expect(com.term).toEqual(1);
         expect(com.observations).toEqual(null);
         expect(com.ordinance).toEqual(null);
      });
   });

   describe('findById', () => {
      it('should call prismaService.findUnique', async () => {
         jest
            .spyOn(prismaService.committee, 'findUnique')
            .mockImplementationOnce((): any => undefined);

         await committeeService.committee({
            where: { id: factory.newMockCommitteeWithId().id },
         });

         expect(prismaService.committee.findUnique).toBeCalled();
      });

      it('should find Com', async () => {
         const com = await committeeService.create(mockCom);

         const response = await committeeService.committee({
            where: { id: com.id },
         });

         expect(response && response.id).toEqual(com.id);
      });
   });

   describe('update', () => {
      it('should call prismaService.update', async () => {
         jest.spyOn(prismaService.committee, 'update').mockImplementationOnce((): any => undefined);

         await committeeService.update({
            where: { id: factory.newMockCommitteeWithId().id },
            data: { bond: 'Updated bond' },
         });

         expect(prismaService.committee.update).toBeCalled();
      });

      it('should update and return com with the correct attr values', async () => {
         const com = await committeeService.create(mockCom);

         const updatedMock = {
            name: 'Updated Name',
            is_active: !mockCom,
            bond: 'Updated',
            begin_date: new Date(),
            end_date: new Date(),
            observations: 'Updated',
            ordinance: 'Updated',
            term: 2,
         };

         const response = await committeeService.update({
            where: { id: com.id },
            data: updatedMock,
         });

         expect(response.name).toEqual(updatedMock.name);
         expect(response.is_active).toEqual(updatedMock.is_active);
         expect(response.bond).toEqual(updatedMock.bond);
         expect(response.begin_date).toEqual(updatedMock.begin_date);
         expect(response.end_date).toEqual(updatedMock.end_date);
         expect(response.observations).toEqual(updatedMock.observations);
         expect(response.ordinance).toEqual(updatedMock.ordinance);
         expect(response.term).toEqual(updatedMock.term);
      });
   });

   describe('delete', () => {
      it('should call prismaService.delete', async () => {
         jest.spyOn(prismaService.committee, 'delete').mockImplementationOnce((): any => undefined);

         await committeeService.delete({
            id: factory.newMockCommitteeWithId().id,
         });

         expect(prismaService.committee.delete).toBeCalled();
      });

      it('should delete', async () => {
         const com = await committeeService.create(mockCom);

         const response = await committeeService.delete({
            id: com.id,
         });

         expect(response.id).toEqual(com.id);
      });
   });
});
