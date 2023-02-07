import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MemberCreateDTO {
   @IsNotEmpty()
   @IsString()
   name: string;

   @IsBoolean()
   @IsOptional()
   is_active?: boolean;
}