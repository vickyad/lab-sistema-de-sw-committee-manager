import { Type } from "class-transformer"
import { IsString, IsOptional, Min, Max, IsInt, IsNotEmpty, IsNumber, IsDate } from "class-validator"

export class MemberOnCommitteeCreateDTO {
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
}

export class MemberOnCommitteeUniqueDTO {
  @IsNotEmpty()
  @IsInt()
  member_id: number;

  @IsNotEmpty()
  @IsInt()
  committee_id: number;
}