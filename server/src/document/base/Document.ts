/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDocumentDocType } from "./EnumDocumentDocType";
import { Item } from "../../item/base/Item";
import { EnumDocumentStatus } from "./EnumDocumentStatus";
import { EnumDocumentVatType } from "./EnumDocumentVatType";

@ObjectType()
class Document {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amountBeforeVat!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDocumentDocType,
  })
  @IsEnum(EnumDocumentDocType)
  @IsOptional()
  @Field(() => EnumDocumentDocType, {
    nullable: true,
  })
  docType?: "Receipt" | "Invoice" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Item],
  })
  @ValidateNested()
  @Type(() => Item)
  @IsOptional()
  items?: Array<Item>;

  @ApiProperty({
    required: false,
    enum: EnumDocumentStatus,
  })
  @IsEnum(EnumDocumentStatus)
  @IsOptional()
  @Field(() => EnumDocumentStatus, {
    nullable: true,
  })
  status?: "Open" | "Closed" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumDocumentVatType,
  })
  @IsEnum(EnumDocumentVatType)
  @IsOptional()
  @Field(() => EnumDocumentVatType, {
    nullable: true,
  })
  vatType?: "Default" | "Included" | "Exempt" | null;
}

export { Document as Document };
