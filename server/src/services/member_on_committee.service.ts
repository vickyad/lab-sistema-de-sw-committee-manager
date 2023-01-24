
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { MemberOnCommittee, Prisma } from '@prisma/client';

@Injectable()
export class MemberOnCommitteeService {
  constructor(private prisma: PrismaService) {}

  async memberOnCommittee(member_id: number, committee_id: number): Promise<MemberOnCommittee | null> {
    return this.prisma.memberOnCommittee.findUnique({
      where: {
        member_id_committee_id: { member_id, committee_id }
      },
    });
  }

  async memberOnCommittees(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MemberOnCommitteeWhereUniqueInput;
    where?: Prisma.MemberOnCommitteeWhereInput;
    orderBy?: Prisma.MemberOnCommitteeOrderByWithRelationInput;
  }): Promise<MemberOnCommittee[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.memberOnCommittee.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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
    const { data, where } = params;
    return this.prisma.memberOnCommittee.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.MemberOnCommitteeWhereUniqueInput): Promise<MemberOnCommittee> {
    return this.prisma.memberOnCommittee.delete({
      where,
    });
  }
}
