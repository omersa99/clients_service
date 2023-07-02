/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Supplier } from "@prisma/client";

export class SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SupplierCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierCountArgs>
  ): Promise<number> {
    return this.prisma.supplier.count(args);
  }

  async findMany<T extends Prisma.SupplierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>
  ): Promise<Supplier[]> {
    return this.prisma.supplier.findMany(args);
  }
  async findOne<T extends Prisma.SupplierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierFindUniqueArgs>
  ): Promise<Supplier | null> {
    return this.prisma.supplier.findUnique(args);
  }
  async create<T extends Prisma.SupplierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierCreateArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.create<T>(args);
  }
  async update<T extends Prisma.SupplierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierUpdateArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.update<T>(args);
  }
  async delete<T extends Prisma.SupplierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierDeleteArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.delete(args);
  }
}
