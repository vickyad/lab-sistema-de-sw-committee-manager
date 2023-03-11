import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Committee, Prisma } from '@prisma/client';
import { CommitteeCreateDTO } from 'src/DTOs/committee.dto';

@Injectable()
export class CommitteeService {
   constructor(private prisma: PrismaService) {}

   async committee(args: Prisma.CommitteeFindUniqueArgs): Promise<Committee | null> {
      return this.prisma.committee.findUnique(args);
   }

   async committees(args: Prisma.CommitteeFindManyArgs): Promise<Committee[]> {
      return this.prisma.committee.findMany(args);
   }

   async create(dto: CommitteeCreateDTO): Promise<Committee> {
      const args = this.DTOToPrismaCreateArgs(dto);
      return this.prisma.committee.create(args);
   }

   async update(args: {
      where: Prisma.CommitteeWhereUniqueInput;
      data: Prisma.CommitteeUpdateInput;
   }): Promise<Committee> {
      return this.prisma.committee.update(args);
   }

   async delete(where: Prisma.CommitteeWhereUniqueInput): Promise<Committee> {
      return this.prisma.committee.delete({
         where,
      });
   }

   private DTOToPrismaCreateArgs = (dto: CommitteeCreateDTO) => {
      let newParams = dto;
      if (dto.members) {
         (newParams as Prisma.CommitteeCreateInput).members = {
            createMany: {
               data: dto.members.map((e) => {
                  return { member_id: e };
               }),
            },
         };
      }
      return { data: newParams } as Prisma.CommitteeCreateArgs;
   };
}
