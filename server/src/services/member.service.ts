import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Member, Prisma } from '@prisma/client';
import { MemberOnCommitteeService } from './member_on_committee.service';

@Injectable()
export class MemberService {
   constructor(
      private prisma: PrismaService,
      private memberOnCommitteeService: MemberOnCommitteeService,
   ) {}

   async getOne(id: number): Promise<Member | null> {
      return this.member({
         where: { id },
         include: {
            committees: { include: { committee: true } },
         },
      });
   }

   async getAll() {
      return this.prisma.member.findMany({
         where: { is_active: true },
         orderBy: { name: 'asc' },
         include: {
            committees: {
               include: { committee: true },
            },
         },
      });
   }

   async getOptions() {
      return this.prisma.member.findMany({
         where: { is_active: true },
         orderBy: { name: 'asc' },
         select: {
            id: true,
            name: true,
         },
      });
   }

   private async member(params: Prisma.MemberFindUniqueArgs): Promise<Member | null> {
      return this.prisma.member.findUnique(params);
   }

   private async members(params: Prisma.MemberFindManyArgs): Promise<Member[]> {
      return this.prisma.member.findMany(params);
   }

   async create(data: Prisma.MemberCreateInput): Promise<Member> {
      return this.prisma.member.create({ data });
   }

   async update(params: {
      where: Prisma.MemberWhereUniqueInput;
      data: Prisma.MemberUpdateInput;
   }): Promise<Member> {
      return this.prisma.member.update(params);
   }

   async delete(where: Prisma.MemberWhereUniqueInput): Promise<Member> {
      return this.prisma.member.delete({
         where,
      });
   }

   async getActiveMemberCommitteeHistory(): Promise<any[]> {
      const results: any[] = await this.prisma.member.findMany({
         select: {
            id: true,
            name: true,
            committees: {
               select: {
                  role: true,
                  begin_date: true,
                  observations: true,
                  is_active: true,
                  committee: {
                     select: {
                        id: true,
                        name: true,
                     },
                  },
               },
            },
         },
         where: {
            is_active: true,
         },
         orderBy: {
            name: 'asc',
         },
      });

      if (!results) return;

      results.forEach((m) => {
         return (m.committees = m.committees.reduce(
            (obj, curr) => {
               obj[curr.is_active ? 'active' : 'inactive'].push(curr);
               return obj;
            },
            { active: new Array(), inactive: new Array() },
         ));
      });

      return results;
   }
}
