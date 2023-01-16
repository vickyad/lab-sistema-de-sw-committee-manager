
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Member, Prisma } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async member(
    memberWhereUniqueInput: Prisma.MemberWhereUniqueInput,
  ): Promise<Member | null> {
    return this.prisma.member.findUnique({
      where: memberWhereUniqueInput,
    });
  }

  async members(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MemberWhereUniqueInput;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput;
  }): Promise<Member[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.member.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createMember(data: Prisma.MemberCreateInput): Promise<Member> {
    return this.prisma.member.create({
      data,
    });
  }

  async updateMember(params: {
    where: Prisma.MemberWhereUniqueInput;
    data: Prisma.MemberUpdateInput;
  }): Promise<Member> {
    const { where, data } = params;
    return this.prisma.member.update({
      data,
      where,
    });
  }

  async deleteMember(where: Prisma.MemberWhereUniqueInput): Promise<Member> {
    return this.prisma.member.delete({
      where,
    });
  }
}
