import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Committee, Prisma } from '@prisma/client';

@Injectable()
export class CommitteeService {
   constructor(private prisma: PrismaService) {}

   async committee(params: Prisma.CommitteeFindUniqueArgs): Promise<Committee | null> {
      return this.prisma.committee.findUnique(params);
   }

   async committees(params: Prisma.CommitteeFindManyArgs): Promise<Committee[]> {
      return this.prisma.committee.findMany(params);
   }

   async create(data: Prisma.CommitteeCreateInput): Promise<Committee> {
      return this.prisma.committee.create({
         data,
      });
   }

   async update(params: {
      where: Prisma.CommitteeWhereUniqueInput;
      data: Prisma.CommitteeUpdateInput;
   }): Promise<Committee> {
      return this.prisma.committee.update(params);
   }

   async delete(where: Prisma.CommitteeWhereUniqueInput): Promise<Committee> {
      return this.prisma.committee.delete({
         where,
      });
   }
}
