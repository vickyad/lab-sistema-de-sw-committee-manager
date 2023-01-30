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
import { MemberOnCommitteeInfoDTO, MemberOnCommitteeUniqueDTO } from 'src/DTOs/member_on_committee.dto'

@Controller('member_on_committee')
export class MemberOnCommitteeController {
   constructor(private readonly memberOnCommitteeService: MemberOnCommitteeService) {}

   @Get()
   async getOne(
      @Body('where') where: MemberOnCommitteeUniqueDTO,
      @Body('include') include?: Prisma.MemberOnCommitteeInclude,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.memberOnCommittee({
         where: { member_id_committee_id: { member_id: where.member_id, committee_id: where.committee_id } },
         include,
      });
   }

   @Get('/all')
   async getAll(
      @Body('where') where?: Prisma.MemberOnCommitteeWhereInput, //TODO validar
      @Body('orderBy')
      orderBy?: Prisma.MemberOnCommitteeOrderByWithRelationInput, //TODO validar
      @Body('include') include?: Prisma.MemberOnCommitteeInclude, //TODO validar
   ): Promise<MemberOnCommitteeModel[]> {
      return this.memberOnCommitteeService.memberOnCommittees({
         where,
         orderBy,
         include,
      });
   }

   @Get('/page')
   async getPage(
      @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
      @Query('take', new DefaultValuePipe(pageEnum.PAGE_SIZE), ParseIntPipe)
      take: number,
      @Body('where') where?: Prisma.MemberOnCommitteeWhereInput, //TODO validar
      @Body('orderBy')
      orderBy?: Prisma.MemberOnCommitteeOrderByWithRelationInput, //TODO validar
      @Body('include') include?: Prisma.MemberOnCommitteeInclude, //TODO validar
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
      @Body('data') data: MemberOnCommitteeInfoDTO,
      @Body('where') where: MemberOnCommitteeUniqueDTO,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.create({
         ...data as MemberOnCommitteeInfoDTO,
         member: { connect: { id: where.member_id } },
         committee: { connect: { id: where.committee_id } },
      });
   }

   @Patch()
   async update(
      @Body('data') data: MemberOnCommitteeInfoDTO,
      @Body('where') where: MemberOnCommitteeUniqueDTO,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.update({
         where: { member_id_committee_id: { member_id: where.member_id, committee_id: where.committee_id } },
         data
      });
   }

   @Delete()
   async delete(
      @Body('where') where: MemberOnCommitteeUniqueDTO,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.delete({
         member_id_committee_id: { member_id: where.member_id, committee_id: where.committee_id },
      });
   }
}
