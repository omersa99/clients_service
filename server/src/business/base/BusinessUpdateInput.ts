/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBusinessAccountingType } from "./EnumBusinessAccountingType";
import {
  IsEnum,
  IsOptional,
  IsBoolean,
  IsString,
  ValidateNested,
} from "class-validator";
import { ClientUpdateManyWithoutBusinessesInput } from "./ClientUpdateManyWithoutBusinessesInput";
import { Type } from "class-transformer";

@InputType()
class BusinessUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumBusinessAccountingType,
  })
  @IsEnum(EnumBusinessAccountingType)
  @IsOptional()
  @Field(() => EnumBusinessAccountingType, {
    nullable: true,
  })
  accountingType?: "Unknown" | "Cash" | "Accumulated" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClientUpdateManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ClientUpdateManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ClientUpdateManyWithoutBusinessesInput, {
    nullable: true,
  })
  clients?: ClientUpdateManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { BusinessUpdateInput as BusinessUpdateInput };
