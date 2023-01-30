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

   is_active?: boolean;
   begin_date?: Date;
   end_date?: Date;
   term?: number;
   ordinance?: string;
   observations?: string;
}
export class CreateMemberOnCommitteeBaseDTO {
   role?: string;
   begin_date?: Date;
   term?: number;
   observations?: string;

   constructor(obj) {
      this.role = obj.role;
      this.begin_date = obj.begin_date;
      this.term = obj.term;
      this.observations = obj.observations;
   }
}

export class CreateMemberOnCommitteeDTO extends CreateMemberOnCommitteeBaseDTO {
   @IsNotEmpty()
   member_id: number;

   @IsNotEmpty()
   committee_id: number;
}

// export class OptionalNumberDTO {
//   @IsOptional()
//   @Type(() => Number)
//   @IsInt()
//   number: number;
//  }
