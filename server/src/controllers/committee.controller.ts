import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   ParseIntPipe,
   Query,
   Patch,
} from '@nestjs/common';
import { CommitteeService } from '../services/committee.service';
import { Committee } from '@prisma/client';
import { CommitteeCreateDTO, CommitteeUpdateDTO } from 'src/DTOs/committee.dto'

@Controller('committee')
export class CommiteeController {
   constructor(private readonly committeeService: CommitteeService) {}

   @Get()
   async getOne(
      @Query('id', ParseIntPipe) id: number,
   ): Promise<Committee> {
      return this.committeeService.committee({
         where: { id },
         include: { 
            members: { include: { member: true } }
         },
      });
   }

   @Get('/all')
   async getAll(
   ): Promise<Committee[]> {
      return this.committeeService.committees({
         where: { is_active: true },
         orderBy: { name: "asc" },
         include: { members: {
            select: { member: true },
          }},
      });
   }

   @Get('/options')
   async getOptions(
   ): Promise<Committee[]> {
      return this.committeeService.committees({
         where: { is_active: true },
         orderBy: { name: "asc" },
         select: { 
            id: true,
            name: true
         },
      });
   }

   

   @Post()
   async create(@Body('data') data: CommitteeCreateDTO): Promise<Committee> {
      return this.committeeService.create(data);
   }

   @Patch()
   async update(
      @Query('id', ParseIntPipe) id: number,
      @Body('data') data: CommitteeUpdateDTO,
   ): Promise<Committee> {
      return this.committeeService.update({
         where: { id },
         data,
      });
   }

   @Delete()
   async delete(@Query('id', ParseIntPipe) id: number): Promise<Committee> {
      return this.committeeService.delete({ id });
   }
}
