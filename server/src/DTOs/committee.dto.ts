import { Type } from "class-transformer"
import { IsNotEmpty, IsString, IsBoolean, IsOptional, Min, Max, IsInt, IsDate } from "class-validator"

export class CommitteeCreateDTO {
  @IsNotEmpty()
  @IsString()
  bond: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  begin_date?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  end_date?: Date;

  @Min(1)
  @Max(100)
  @IsInt()
  @IsOptional()
  term?: number;

  @IsString()
  @IsOptional()
  ordinance?: string;

  @IsString()
  @IsOptional()
  observations?: string;
}