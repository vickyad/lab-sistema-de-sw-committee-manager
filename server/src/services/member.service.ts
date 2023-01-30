import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Member, Prisma } from '@prisma/client';
import { CreateMemberDTO } from 'src/DTOs';

@Injectable()
export class MemberService {
   constructor(private prisma: PrismaService) {}

   async member(params: Prisma.MemberFindUniqueArgs): Promise<Member | null> {
      return this.prisma.member.findUnique(params);
   }

   async members(params: Prisma.MemberFindManyArgs): Promise<Member[]> {
      return this.prisma.member.findMany(params);
   }

   async create(data: CreateMemberDTO): Promise<Member> {
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
}
