import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMemberDTO {
   @IsNotEmpty()
   name: string;

   is_active?: boolean;
   //committees?: CommitteeDTO
}
export class CreateCommitteeDTO {
   @IsNotEmpty()
   bond: string;

   @IsNotEmpty()
   name: string;

   begin_date: Date | null;
   end_date: Date | null;
   term: number | null;
   ordinance: string | null;
   observations: string | null;
   is_active: boolean;
}

// export class OptionalNumberDTO {
//   @IsOptional()
//   @Type(() => Number)
//   @IsInt()
//   number: number;
//  }
