import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   Patch,
   ParseIntPipe,
   Query,
} from '@nestjs/common';
import { MemberOnCommitteeService } from '../services/member_on_committee.service';
import { MemberOnCommittee as MemberOnCommitteeModel } from '@prisma/client';
import { MemberOnCommitteeCreateDTO, MemberOnCommitteeUpdateDTO } from 'src/DTOs/member_on_committee.dto'
import { ValidatePayloadExistsPipe } from 'src/pipes/validate_payload_exists'

@Controller('member_on_committee')
export class MemberOnCommitteeController {
   constructor(private readonly memberOnCommitteeService: MemberOnCommitteeService) {}

   // @Get()
   // async getOne(
   //    @Query('member_id', ParseIntPipe) member_id: number,
   //    @Query('committee_id', ParseIntPipe) committee_id: number
   // ): Promise<MemberOnCommitteeModel> {
   //    return this.memberOnCommitteeService.memberOnCommittee({
   //       where: { member_id_committee_id: { member_id, committee_id } },
   //    });
   // }
   
   @Get('/role_history')
   async getHistory(
      @Query('committee_id', ParseIntPipe) committee_id: number,
      @Query('role') role: string,
   ): Promise<MemberOnCommitteeModel[]> {
      return this.memberOnCommitteeService.memberOnCommittees({
         where: {
            committee_id,
            role//: { equals: role } 
         },
         select: {
            role: true,
            begin_date: true,
            term: true,
            observations: true,
            member: { select: { 
               id: true,
               name: true } }
         },
         orderBy: {
            member: {
               name: "asc"
            }
         }
      });
   }


   @Post()
   async create( //TODO tentar quebrar ao fazer update por POST.
      @Query('member_id', ParseIntPipe) member_id: number,
      @Query('committee_id', ParseIntPipe) committee_id: number,
      @Body('data', ValidatePayloadExistsPipe) data: MemberOnCommitteeCreateDTO,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.create({
         ...data as MemberOnCommitteeCreateDTO,
         member: { connect: { id: member_id } },
         committee: { connect: { id: committee_id } },
      });
   }

   @Patch()
   async update(
      @Query('member_id', ParseIntPipe) member_id: number,
      @Query('committee_id', ParseIntPipe) committee_id: number,
      @Body('data', ValidatePayloadExistsPipe) data: MemberOnCommitteeUpdateDTO,
   ): Promise<MemberOnCommitteeModel> {
      return this.memberOnCommitteeService.update({
         where: { member_id_committee_id: { member_id, committee_id } },
         data
      });
   }

   // @Delete()
   // async delete(
   //    @Query('member_id', ParseIntPipe) member_id: number,
   //    @Query('committee_id', ParseIntPipe) committee_id: number
   // ): Promise<MemberOnCommitteeModel> {
   //    return this.memberOnCommitteeService.delete({
   //       member_id_committee_id: { member_id, committee_id },
   //    });
   // }
}
