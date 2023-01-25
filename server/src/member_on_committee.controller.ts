
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MemberOnCommitteeService } from './services/member_on_committee.service';
import { MemberOnCommittee as MemberOnCommitteeModel, Prisma } from '@prisma/client';
import { CreateCommitteeDTO } from './DTOs/DTOs';

@Controller()
export class MemberOnCommitteeController {
  constructor(
    private readonly memberOnCommitteeService: MemberOnCommitteeService,
  ) {}

  @Get('member_on_committee/:id')
  async getMemberOnCommitteeById(@Param('member_id') member_id: string, @Param('committee_id') committee_id: string): Promise<MemberOnCommitteeModel> {
    return this.memberOnCommitteeService.memberOnCommittee( //TODO: Aqui deveria ter :params para consistência?
      Number(member_id),
      Number(committee_id));
  }

  @Get('member_on_committee/') //TODO: Qual devia ser o URL aq?
  async getCommitteesByQuery(@Param('skip') skip: string, 
                          @Param('take') take: string, 
                          @Param('cursor') cursor: Prisma.MemberOnCommitteeWhereUniqueInput, 
                          @Param('where') where: Prisma.MemberOnCommitteeWhereInput, 
                          @Param('orderBy') orderBy: Prisma.MemberOnCommitteeOrderByWithRelationInput): Promise<MemberOnCommitteeModel[]> {
    return this.memberOnCommitteeService.memberOnCommittees({
      skip: Number(skip),     //TODO: Aqui deveria fazer algum cheque? Tipo rejeitar se não for um número
      take: Number(take),
      cursor: cursor,
      where: where,
      orderBy: orderBy
    })
  }

  @Post('member_on_committee/') //TODO: Qual devia ser o URL aq?
  async createCommittee(@Param('data') data: Prisma.MemberOnCommitteeCreateInput): Promise<MemberOnCommitteeModel> {
    return this.memberOnCommitteeService.create(data);
  }

  @Put('member_on_committee/:id') 
  async updateCommittee(@Param('member_id') member_id: string, @Param('committee_id') committee_id: string, 
                        @Param('data') data:Prisma.MemberOnCommitteeUpdateInput): Promise<MemberOnCommitteeModel> {
    return this.memberOnCommitteeService.update({ 
      where: { member_id_committee_id: {member_id: Number(member_id), committee_id: Number(committee_id)}},
      data: data });
  }

  @Delete('member_on_committee/:id')
  async deleteCommittee(@Param('member_id') member_id: string, @Param('committee_id') committee_id: string): Promise<MemberOnCommitteeModel> {
    return this.memberOnCommitteeService.delete({ member_id_committee_id: {member_id: Number(member_id), committee_id: Number(committee_id)}});
  }
}
