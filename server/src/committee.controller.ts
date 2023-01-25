
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CommitteeService } from './services/committee.service';
import { Committee as CommitteeModel, Prisma } from '@prisma/client';
import { CreateCommitteeDTO } from './DTOs/DTOs';

@Controller()
export class CommiteeController {
  constructor(
    private readonly committeeService: CommitteeService,
  ) {}

  @Get('committee/:id')
  async getCommitteeById(@Param('id') id: string): Promise<CommitteeModel> {
    return this.committeeService.committee({ id: Number(id) });
  }

  @Get('committee/') //TODO: Qual devia ser o URL aq?
  async getCommitteesByQuery(@Param('skip') skip: string, 
                          @Param('take') take: string, 
                          @Param('cursor') cursor: string, 
                          @Param('where') where: Prisma.CommitteeWhereInput, 
                          @Param('orderBy') orderBy: Prisma.CommitteeOrderByWithRelationInput,): Promise<CommitteeModel[]> {
    return this.committeeService.committees({
      skip: Number(skip),     //TODO: Aqui deveria fazer algum cheque? Tipo rejeitar se não for um número
      take: Number(take),
      cursor: { id: Number(cursor) },
      where: where,
      orderBy: orderBy
    })
  }

  @Post('committee/') //TODO: Qual devia ser o URL aq?
  async createCommittee(@Param('data') data: CreateCommitteeDTO): Promise<CommitteeModel> {
    return this.committeeService.create(data);
  }

  @Put('committee/:id') 
  async updateCommittee(@Param('id') id: string, @Param('data') data:Prisma.CommitteeUpdateInput): Promise<CommitteeModel> {
    return this.committeeService.update({ 
      where: { id: Number(id) },
      data: data });
  }

  @Delete('committee/:id')
  async deleteCommittee(@Param('id') id: string): Promise<CommitteeModel> {
    return this.committeeService.delete({ id: Number(id) });
  }

  // @Get('feed')
  // async getPublishedCommittees(): Promise<CommitteeModel[]> {
  //   return this.committeeService.committees({
  //     where: { published: true },
  //   });
  // }

  // @Get('filtered-committees/:searchString')
  // async getFilteredCommittees(
  //   @Param('searchString') searchString: string,
  // ): Promise<CommitteeModel[]> {
  //   return this.committeeService.committees({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  // @Post('committee')
  // async createDraft(
  //   @Body() committeeData: { title: string; content?: string; authorEmail: string },
  // ): Promise<CommitteeModel> {
  //   const { title, content, authorEmail } = committeeData;
  //   return this.committeeService.createCommittee({
  //     title,
  //     content,
  //     author: {
  //       connect: { email: authorEmail },
  //     },
  //   });
  // }

  // @Post('member')
  // async signupMember(
  //   @Body() memberData: { name?: string; email: string },
  // ): Promise<MemberModel> {
  //   return this.memberService.createMember(memberData);
  // }

  // @Put('publish/:id')
  // async publishCommittee(@Param('id') id: string): Promise<CommitteeModel> {
  //   return this.committeeService.updateCommittee({
  //     where: { id: Number(id) },
  //     data: { published: true },
  //   });
  // }
}
