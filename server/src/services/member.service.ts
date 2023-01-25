
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Member, Prisma } from '@prisma/client';
import { CreateMemberDTO } from 'src/DTOs/DTOs'

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
    //skip?: number; take?: number; cursor?: Prisma.MemberWhereUniqueInput;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput;
  }): Promise<Member[]> {
    const { 
      //skip, take, cursor, 
      where, orderBy } = params;
    return this.prisma.member.findMany({
      //skip, take, cursor,
      where,
      orderBy,
    });
  }

  async create(dto: CreateMemberDTO): Promise<Member> {
    return this.prisma.member.create({
      data: dto,
    }); 
  }

  async update(params: {
    where: Prisma.MemberWhereUniqueInput;
    data: Prisma.MemberUpdateInput;
  }): Promise<Member> {
    const { where, data } = params;
    return this.prisma.member.update({
      where,
      data,
    });
  }

  async delete(where: Prisma.MemberWhereUniqueInput): Promise<Member> {
    return this.prisma.member.delete({
      where,
    });
  }
}
