import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { MemberOnCommittee, Prisma } from '@prisma/client';

@Injectable()
export class MemberOnCommitteeService {
   constructor(private prisma: PrismaService) {}

   private async memberOnCommittee(
      params: Prisma.MemberOnCommitteeFindUniqueArgs,
   ): Promise<MemberOnCommittee | null> {
      return this.prisma.memberOnCommittee.findUnique(params);
   }

   private async memberOnCommittees(
      params: Prisma.MemberOnCommitteeFindManyArgs,
   ): Promise<MemberOnCommittee[]> {
      return this.prisma.memberOnCommittee.findMany(params);
   }

   async create(data: Prisma.MemberOnCommitteeCreateInput): Promise<MemberOnCommittee> {
      return this.prisma.memberOnCommittee.create({
         data,
      });
   }

   async update(params: {
      where: Prisma.MemberOnCommitteeWhereUniqueInput;
      data: Prisma.MemberOnCommitteeUpdateInput;
   }): Promise<MemberOnCommittee> {
      return this.prisma.memberOnCommittee.update(params);
   }

   async delete(where: Prisma.MemberOnCommitteeWhereUniqueInput): Promise<MemberOnCommittee> {
      return this.prisma.memberOnCommittee.delete({
         where,
      });
   }
}
