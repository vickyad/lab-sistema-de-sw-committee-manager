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

   async getMember_ActiveMemberOnCommitteeList() {
      return this.prisma.member.findMany({
         select: {
            id: true,
            name: true,
            committees: {
               select: {
                  committee_id: true
               },
               where: {
                  is_active: true
               }
            }
         },
         orderBy: {
            name: "asc"
         }
      });
   }

   async getMemberOnCommitteeHistory(member_id: number) {
      const results = await this.prisma.memberOnCommittee.findMany({
         where: { member_id },
         select: {
            role: true,
            begin_date: true,
            observations: true,
            committee_id: true,
            is_active: true,
            committee: {
               select: {
                  name: true
               }
            }
         },
         orderBy: {
            committee: {
               name: 'asc'
            }
         }
      });

      if(!results) return

      return results.reduce((obj, curr) => {
         obj[curr.is_active ? 'active' : 'inactive'].push(curr)
         return obj
      }, { active: new Array(), inactive: new Array() })
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
