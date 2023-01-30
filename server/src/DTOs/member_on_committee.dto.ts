import { IntersectionType } from "@nestjs/mapped-types"
import { Type } from "class-transformer"
import { IsString, IsOptional, Min, Max, IsInt, IsNotEmpty, IsNumber, IsDate } from "class-validator"

export class MemberOnCommitteeInfoDTO {
  @IsString()
  @IsOptional()
  role?: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  begin_date?: Date;

  @Min(1)
  @Max(100)
  @IsInt()
  @IsOptional()
  term?: number;

  @IsString()
  @IsOptional()
  observations?: string;

  constructor(obj) {
    this.role = obj.role
    this.begin_date = obj.begin_date
    this.term = obj.term
    this.observations = obj.observations
  }

}

export class MemberOnCommitteeUniqueDTO {
  @IsNotEmpty()
  @IsNumber()
  member_id: number;

  @IsNotEmpty()
  @IsNumber()
  committee_id: number;
}

export class MemberOnCommitteeDTO extends IntersectionType(MemberOnCommitteeUniqueDTO, MemberOnCommitteeInfoDTO){}