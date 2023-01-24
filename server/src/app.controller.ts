
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
import { CommitteeService } from './services/committee.service';
import { Member as MemberModel, Committee as CommitteeModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly memberService: MemberService,
    private readonly committeeService: CommitteeService,
  ) {}

  @Get('committee/:id')
  async getCommitteeById(@Param('id') id: string): Promise<CommitteeModel> {
    return this.committeeService.committee({ id: Number(id) });
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

  @Delete('committee/:id')
  async deleteCommittee(@Param('id') id: string): Promise<CommitteeModel> {
    return this.committeeService.delete({ id: Number(id) });
  }
}
