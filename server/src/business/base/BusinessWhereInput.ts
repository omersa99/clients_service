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
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientListRelationFilter } from "../../client/base/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class BusinessWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumBusinessAccountingType,
  })
  @IsEnum(EnumBusinessAccountingType)
  @IsOptional()
  @Field(() => EnumBusinessAccountingType, {
    nullable: true,
  })
  accountingType?: "Unknown" | "Cash" | "Accumulated";

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  active?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ClientListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClientListRelationFilter)
  @IsOptional()
  @Field(() => ClientListRelationFilter, {
    nullable: true,
  })
  clients?: ClientListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { BusinessWhereInput as BusinessWhereInput };