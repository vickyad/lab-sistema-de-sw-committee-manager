import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class MemberDTO {
   @IsNotEmpty()
   name: string;

   @IsBoolean()
   @IsOptional()
   is_active?: boolean;
}


// export class OptionalNumberDTO {
//   @IsOptional()
//   @Type(() => Number)
//   @IsInt()
//   number: number;
//  }
