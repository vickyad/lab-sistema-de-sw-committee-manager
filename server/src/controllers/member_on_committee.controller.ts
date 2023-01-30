import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   Query,
   ParseIntPipe,
   Patch,
   DefaultValuePipe,
} from '@nestjs/common';
import { MemberOnCommitteeService } from '../services/member_on_committee.service';
import { MemberOnCommittee as MemberOnCommitteeModel, Prisma } from '@prisma/client';
import { pageEnum } from 'src/enum';

@Controller('member_on_committee')
export class MemberOnCommitteeController {
   constructor(private readonly memberOnCommitteeService: MemberOnCommitteeService) {}

   @Get()
   async getById(
      @Query('member_id', ParseIntPipe) member_id: number,
      @Query('committee_id', ParseIntPipe) committee_id: number,
      @Body('include') include?: Prisma.MemberOnCommitteeInclude,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.memberOnCommittee({
         where: { member_id_committee_id: { member_id, committee_id } },
         include,
      });
   }

   @Get('/all')
   async getAll(
      @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
      @Query('take', new DefaultValuePipe(pageEnum.PAGE_SIZE), ParseIntPipe)
      take?: number,
      @Body('where') where?: Prisma.MemberOnCommitteeWhereInput,
      @Body('orderBy')
      orderBy?: Prisma.MemberOnCommitteeOrderByWithRelationInput,
      @Body('include') include?: Prisma.MemberOnCommitteeInclude,
   ): Promise<MemberOnCommitteeModel[]> {
      return this.memberOnCommitteeService.memberOnCommittees({
         skip,
         take,
         where,
         orderBy,
         include,
      });
   }

   @Post()
   async create(
      @Body('data') data: Prisma.MemberOnCommitteeCreateInput,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.create(data);
   }

   @Patch()
   async update(
      @Query('member_id', ParseIntPipe) member_id: number,
      @Query('committee_id', ParseIntPipe) committee_id: number,
      @Body() data: Prisma.MemberOnCommitteeUpdateInput,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.update({
         where: { member_id_committee_id: { member_id, committee_id } },
         data,
      });
   }

   @Delete()
   async delete(
      @Query('member_id', ParseIntPipe) member_id: number,
      @Query('committee_id', ParseIntPipe) committee_id: number,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.delete({
         member_id_committee_id: { member_id, committee_id },
      });
   }
}
