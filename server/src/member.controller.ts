
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MemberService } from './services/member.service';
import { Member as MemberModel, Prisma } from '@prisma/client';
import { CreateMemberDTO } from './DTOs/DTOs';

@Controller()
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
  ) {}

  @Get('member/:id')
  async getMemberById(@Param('id') id: string): Promise<MemberModel> {
    return this.memberService.member({ id: Number(id) });
  }

  @Get('member/') //TODO: Qual devia ser o URL aq?
  async getMembersByQuery(@Param('where') where: Prisma.MemberWhereInput, 
                          @Param('orderBy') orderBy: Prisma.MemberOrderByWithRelationInput,): Promise<MemberModel[]> {
    return this.memberService.members({
      where: where,
      orderBy: orderBy
    })
  }

  @Post('member/') //TODO: Qual devia ser o URL aq?
  async createMember(@Param('data') data: CreateMemberDTO): Promise<MemberModel> {
    return this.memberService.create(data);
  }

  @Put('member/:id') 
  async updateMember(@Param('id') id: string, @Param('data') data:Prisma.MemberUpdateInput): Promise<MemberModel> {
    return this.memberService.update({ 
      where: { id: Number(id) },
      data: data });
  }

  @Delete('member/:id')
  async deleteMember(@Param('id') id: string): Promise<MemberModel> {
    return this.memberService.delete({ id: Number(id) });
  }
}
