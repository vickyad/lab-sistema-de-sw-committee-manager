import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CommitteeTemplateCreateDTO {
   @IsNotEmpty()
   @IsString()
   bond: string;

   @IsNotEmpty()
   @IsString()
   name: string;

   @IsArray()
   @IsString({ each: true })
   @IsNotEmpty({ each: true })
   roles: string[];
}

export class CommitteeTemplateUpdateDTO extends PartialType(CommitteeTemplateCreateDTO) {}
