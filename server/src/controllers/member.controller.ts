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
import { MemberCreateDTO, MemberUpdateDTO } from '../DTOs/member.dto';

@Controller('member')
export class MemberController {
   constructor(private readonly memberService: MemberService) {}

   // /member?id=1
   @Get()
   async getOne(
      @Query('id', ParseIntPipe) id: number,
   ): Promise<Member> {
      return this.memberService.getOne(id);
   }

   // /member/all
   @Get('/all')
   async getAll(
   ): Promise<Member[]> {
      return this.memberService.getAll();
   }

   // /member/options
   @Get('/options')
   async getOptions(
   ): Promise<any[]> {
      return this.memberService.getOptions();
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
      @Body('data') data: MemberUpdateDTO,
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
