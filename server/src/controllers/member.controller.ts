import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   ParseIntPipe,
   Patch,
   Query,
   DefaultValuePipe,
} from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { Member, Prisma } from '@prisma/client';
import { CreateMemberDTO } from '../DTOs';
import { pageEnum } from 'src/enum';

@Controller('member')
export class MemberController {
   constructor(private readonly memberService: MemberService) {}

   // /member?id=1
   @Get()
   async getById(
      @Query('id', ParseIntPipe) id: number,
      @Body('include') include?: Prisma.MemberInclude,
   ): Promise<Member> {
      return this.memberService.member({
         where: { id },
         include,
      });
   }

   // /member/all
   // /member/all?take=5&skip=10
   @Get('/all')
   async getAll(
      @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
      @Query('take', new DefaultValuePipe(pageEnum.PAGE_SIZE), ParseIntPipe)
      take?: number,
      @Body('where') where?: Prisma.MemberWhereInput,
      @Body('orderBy') orderBy?: Prisma.MemberOrderByWithRelationInput,
      @Body('include') include?: Prisma.MemberInclude,
   ): Promise<Member[]> {
      return this.memberService.members({
         skip,
         take,
         where,
         orderBy,
         include,
      });
   }

   // /member
   @Post()
   async create(@Body() data: CreateMemberDTO): Promise<Member> {
      return this.memberService.create(data);
   }

   // /member?id=1
   @Patch()
   async update(
      @Query('id', ParseIntPipe) id: number,
      @Body() data: Prisma.MemberUpdateInput,
   ): Promise<Member> {
      return this.memberService.update({
         where: { id },
         data,
      });
   }

   // /member?id=1
   @Delete()
   async delete(@Query('id', ParseIntPipe) id: number): Promise<Member> {
      return this.memberService.delete({ id });
   }
}
