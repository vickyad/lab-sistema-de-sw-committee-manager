import { Controller, Get, Post, Body, Delete, ParseIntPipe, Query, Patch } from '@nestjs/common';
import { CommitteeTemplate } from '@prisma/client';
import { CommitteeUpdateDTO } from 'src/DTOs/committee.dto';
import { CommitteeTemplateCreateDTO } from 'src/DTOs/committee_template.dto';
import { CommitteeTemplateService } from 'src/services/committee_template.service';

@Controller('committee_template')
export class CommitteeTemplateController {
   constructor(private readonly committeeTemplateService: CommitteeTemplateService) {}

   @Get()
   async getOne(@Query('id', ParseIntPipe) id: number): Promise<CommitteeTemplate> {
      return this.committeeTemplateService.committeeTemplate({
         where: { id },
         include: {
            roles: { select: { role: true } },
         },
      });
   }

   @Get('/all')
   async getAll(): Promise<CommitteeTemplate[]> {
      return this.committeeTemplateService.committeeTemplates({
         orderBy: { name: 'asc' },
         include: {
            roles: { select: { role: true } },
         },
      });
   }

   @Get('/options')
   async getOptions(): Promise<CommitteeTemplate[]> {
      return this.committeeTemplateService.committeeTemplates({
         orderBy: { name: 'asc' },
         select: {
            name: true,
         },
      });
   }

   @Post()
   async create(@Body('data') data: CommitteeTemplateCreateDTO): Promise<CommitteeTemplate> {
      return this.committeeTemplateService.create(data);
   }

   @Patch()
   async update(
      @Query('id', ParseIntPipe) id: number,
      @Body('data') data: CommitteeUpdateDTO,
   ): Promise<CommitteeTemplate> {
      return this.committeeTemplateService.update({
         where: { id },
         data,
      });
   }

   @Delete()
   async delete(@Query('id', ParseIntPipe) id: number): Promise<CommitteeTemplate> {
      return this.committeeTemplateService.delete({ id });
   }
}
