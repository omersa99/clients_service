/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BusinessService } from "../business.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BusinessCreateInput } from "./BusinessCreateInput";
import { BusinessWhereInput } from "./BusinessWhereInput";
import { BusinessWhereUniqueInput } from "./BusinessWhereUniqueInput";
import { BusinessFindManyArgs } from "./BusinessFindManyArgs";
import { BusinessUpdateInput } from "./BusinessUpdateInput";
import { Business } from "./Business";
import { ClientFindManyArgs } from "../../client/base/ClientFindManyArgs";
import { Client } from "../../client/base/Client";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BusinessControllerBase {
  constructor(
    protected readonly service: BusinessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Business })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: BusinessCreateInput): Promise<Business> {
    return await this.service.create({
      data: data,
      select: {
        accountingType: true,
        active: true,
        address: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Business] })
  @ApiNestedQuery(BusinessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Business[]> {
    const args = plainToClass(BusinessFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accountingType: true,
        active: true,
        address: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accountingType: true,
        active: true,
        address: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() data: BusinessUpdateInput
  ): Promise<Business | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          accountingType: true,
          active: true,
          address: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accountingType: true,
          active: true,
          address: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/clients")
  @ApiNestedQuery(ClientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async findManyClients(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Client[]> {
    const query = plainToClass(ClientFindManyArgs, request.query);
    const results = await this.service.findClients(params.id, {
      ...query,
      select: {
        active: true,
        balance: true,
        bn: true,

        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fullName: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/clients")
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "update",
    possession: "any",
  })
  async connectClients(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/clients")
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "update",
    possession: "any",
  })
  async updateClients(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/clients")
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "update",
    possession: "any",
  })
  async disconnectClients(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: ClientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      clients: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
