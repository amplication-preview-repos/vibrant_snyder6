/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ParkingSpace as PrismaParkingSpace } from "@prisma/client";

export class ParkingSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParkingSpaceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.parkingSpace.count(args);
  }

  async parkingSpaces(
    args: Prisma.ParkingSpaceFindManyArgs
  ): Promise<PrismaParkingSpace[]> {
    return this.prisma.parkingSpace.findMany(args);
  }
  async parkingSpace(
    args: Prisma.ParkingSpaceFindUniqueArgs
  ): Promise<PrismaParkingSpace | null> {
    return this.prisma.parkingSpace.findUnique(args);
  }
  async createParkingSpace(
    args: Prisma.ParkingSpaceCreateArgs
  ): Promise<PrismaParkingSpace> {
    return this.prisma.parkingSpace.create(args);
  }
  async updateParkingSpace(
    args: Prisma.ParkingSpaceUpdateArgs
  ): Promise<PrismaParkingSpace> {
    return this.prisma.parkingSpace.update(args);
  }
  async deleteParkingSpace(
    args: Prisma.ParkingSpaceDeleteArgs
  ): Promise<PrismaParkingSpace> {
    return this.prisma.parkingSpace.delete(args);
  }
}