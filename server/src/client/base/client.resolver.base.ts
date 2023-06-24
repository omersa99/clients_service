/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateClientArgs } from "./CreateClientArgs";
import { UpdateClientArgs } from "./UpdateClientArgs";
import { DeleteClientArgs } from "./DeleteClientArgs";
import { ClientCountArgs } from "./ClientCountArgs";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientFindUniqueArgs } from "./ClientFindUniqueArgs";
import { Client } from "./Client";
import { Business } from "../../business/base/Business";
import { ClientService } from "../client.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Client)
export class ClientResolverBase {
  constructor(
    protected readonly service: ClientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async _clientsMeta(
    @graphql.Args() args: ClientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Client])
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async clients(@graphql.Args() args: ClientFindManyArgs): Promise<Client[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Client, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "own",
  })
  async client(
    @graphql.Args() args: ClientFindUniqueArgs
  ): Promise<Client | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "create",
    possession: "any",
  })
  async createClient(@graphql.Args() args: CreateClientArgs): Promise<Client> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        business: args.data.business
          ? {
              connect: args.data.business,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async updateClient(
    @graphql.Args() args: UpdateClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          business: args.data.business
            ? {
                connect: args.data.business,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "delete",
    possession: "any",
  })
  async deleteClient(
    @graphql.Args() args: DeleteClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Business, {
    nullable: true,
    name: "business",
  })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  async resolveFieldBusiness(
    @graphql.Parent() parent: Client
  ): Promise<Business | null> {
    const result = await this.service.getBusiness(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
