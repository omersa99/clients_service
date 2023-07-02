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
  ValidateNested,
  IsString,
  IsInt,
} from "class-validator";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumBusinessBusinessType } from "./EnumBusinessBusinessType";
import { ClientCreateNestedManyWithoutBusinessesInput } from "./ClientCreateNestedManyWithoutBusinessesInput";
import { Type } from "class-transformer";

@InputType()
class BusinessCreateInput {
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
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  address?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumBusinessBusinessType,
  })
  @IsEnum(EnumBusinessBusinessType)
  @IsOptional()
  @Field(() => EnumBusinessBusinessType, {
    nullable: true,
  })
  businessType?: "OsekMurshe" | "LtdCompany" | "OsekPatur" | null;

  @ApiProperty({
    required: false,
    type: () => ClientCreateNestedManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ClientCreateNestedManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ClientCreateNestedManyWithoutBusinessesInput, {
    nullable: true,
  })
  clients?: ClientCreateNestedManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionRate?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  exemption?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  taxId?: number | null;

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

export { BusinessCreateInput as BusinessCreateInput };
