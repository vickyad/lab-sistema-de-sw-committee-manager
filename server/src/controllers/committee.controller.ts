import {
   Controller,
   Get,
   Post,
   Body,
   Delete,
   ParseIntPipe,
   Query,
   Patch,
   DefaultValuePipe,
} from '@nestjs/common';
import { CommitteeService } from '../services/committee.service';
import { Committee, Prisma } from '@prisma/client';
import { pageEnum } from 'src/enum';
import { CommitteeDTO } from 'src/DTOs/committee.dto'

@Controller('committee')
export class CommiteeController {
   constructor(private readonly committeeService: CommitteeService) {}

   @Get()
   async getOne(
      @Query('id', ParseIntPipe) id: number,
      @Body('include') include?: Prisma.CommitteeInclude,
   ): Promise<Committee> {
      return this.committeeService.committee({
         where: { id },
         include,
      });
   }

   @Get('/all')
   async getAll(
      @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
      @Query('take', new DefaultValuePipe(pageEnum.PAGE_SIZE), ParseIntPipe) take?: number,
      @Body('where') where?: Prisma.CommitteeWhereInput,
      @Body('orderBy') orderBy?: Prisma.CommitteeOrderByWithRelationInput,
      @Body('include') include?: Prisma.CommitteeInclude,
   ): Promise<Committee[]> {
      return this.committeeService.committees({
         skip,
         take,
         where,
         orderBy,
         include,
      });
   }

   @Post()
   async create(@Body('data') data: CommitteeDTO): Promise<Committee> {
      return this.committeeService.create(data);
   }

   @Patch()
   async update(
      @Query('id', ParseIntPipe) id: number,
      @Body('data') data: Prisma.CommitteeUpdateInput,
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
