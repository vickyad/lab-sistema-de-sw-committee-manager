import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CommitteeTemplate, Prisma } from '@prisma/client';
import { CommitteeTemplateCreateDTO } from 'src/DTOs/committee_template.dto';

@Injectable()
export class CommitteeTemplateService {
   constructor(private prisma: PrismaService) {}

   async committeeTemplate(
      args: Prisma.CommitteeTemplateFindUniqueArgs,
   ): Promise<CommitteeTemplate | null> {
      return this.prisma.committeeTemplate.findUnique(args);
   }

   async committeeTemplates(
      args: Prisma.CommitteeTemplateFindManyArgs,
   ): Promise<CommitteeTemplate[]> {
      return this.prisma.committeeTemplate.findMany(args);
   }

   async create(dto: CommitteeTemplateCreateDTO): Promise<CommitteeTemplate> {
      const args = this.DTOToPrismaCreateArgs(dto);
      return this.prisma.committeeTemplate.create(args);
   }

   async update(args: {
      where: Prisma.CommitteeTemplateWhereUniqueInput;
      data: Prisma.CommitteeTemplateUpdateInput;
   }): Promise<CommitteeTemplate> {
      return this.prisma.committeeTemplate.update(args);
   }

   async delete(where: Prisma.CommitteeTemplateWhereUniqueInput): Promise<CommitteeTemplate> {
      return this.prisma.committeeTemplate.delete({
         where,
      });
   }

   private DTOToPrismaCreateArgs = (dto: CommitteeTemplateCreateDTO) => {
      let newParams = dto;
      if (dto.roles) {
         (newParams as Prisma.CommitteeTemplateCreateInput).roles = {
            createMany: {
               data: dto.roles.map((e) => {
                  return { role: e };
               }),
            },
         };
      }
      return { data: newParams } as Prisma.CommitteeTemplateCreateArgs;
   };
}
