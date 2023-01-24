
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Committee, Prisma } from '@prisma/client';
import { CreateCommitteeDTO } from 'src/DTOs/DTOs'

@Injectable()
export class CommitteeService {
  constructor(private prisma: PrismaService) {}

  async committee(
    committeeWhereUniqueInput: Prisma.CommitteeWhereUniqueInput,
  ): Promise<Committee | null> {
    return this.prisma.committee.findUnique({
      where: committeeWhereUniqueInput,
    });
  }

  async committees(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CommitteeWhereUniqueInput;
    where?: Prisma.CommitteeWhereInput;
    orderBy?: Prisma.CommitteeOrderByWithRelationInput;
  }): Promise<Committee[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.committee.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateCommitteeDTO): Promise<Committee> {
    return this.prisma.committee.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.CommitteeWhereUniqueInput;
    data: Prisma.CommitteeUpdateInput;
  }): Promise<Committee> {
    const { data, where } = params;
    return this.prisma.committee.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.CommitteeWhereUniqueInput): Promise<Committee> {
    return this.prisma.committee.delete({
      where,
    });
  }
}
