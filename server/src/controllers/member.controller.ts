import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   ParseIntPipe,
   Patch,
   Query,
} from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { Member, Prisma } from '@prisma/client';
import { MemberCreateDTO } from '../DTOs/member.dto';

@Controller('member')
export class MemberController {
   constructor(private readonly memberService: MemberService) {}

   // /member?id=1
   @Get()
   async getOne(
      @Query('id', ParseIntPipe) id: number,
   ): Promise<Member> {
      return this.memberService.member({
         where: { id },
         include: { committees: {
            include: { committee: true },
         }},
      });
   }

   // /member/all
   @Get('/all')
   async getAll(
   ): Promise<Member[]> {
      return this.memberService.members({
         where: { is_active: true },
         orderBy: { name: "asc" },
         include: { committees: {
            include: { committee: true },
         }},
      });
   }

   // /member
   @Post()
   async create(@Body('data') data: MemberCreateDTO): Promise<Member> {
      return this.memberService.create(data);
   }

   // /member?id=1
   @Patch()
   async update(
      @Query('id') id: number,
      @Body('data') data: Prisma.MemberUpdateInput,
   ): Promise<Member> {
      return this.memberService.update({
         where: { id },
         data,
      });
   }

   // /member?id=1
   @Delete()
   async delete(@Query('id') id: number): Promise<Member> {
      return this.memberService.delete({ id });
   }
}
