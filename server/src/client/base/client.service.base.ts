/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Client, Business } from "@prisma/client";

export class ClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ClientCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientCountArgs>
  ): Promise<number> {
    return this.prisma.client.count(args);
  }

  async findMany<T extends Prisma.ClientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientFindManyArgs>
  ): Promise<Client[]> {
    return this.prisma.client.findMany(args);
  }
  async findOne<T extends Prisma.ClientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientFindUniqueArgs>
  ): Promise<Client | null> {
    return this.prisma.client.findUnique(args);
  }
  async create<T extends Prisma.ClientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientCreateArgs>
  ): Promise<Client> {
    return this.prisma.client.create<T>(args);
  }
  async update<T extends Prisma.ClientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientUpdateArgs>
  ): Promise<Client> {
    return this.prisma.client.update<T>(args);
  }
  async delete<T extends Prisma.ClientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClientDeleteArgs>
  ): Promise<Client> {
    return this.prisma.client.delete(args);
  }

  async getBusiness(parentId: string): Promise<Business | null> {
    return this.prisma.client
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }
}
