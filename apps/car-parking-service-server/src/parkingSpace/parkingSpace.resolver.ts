import * as graphql from "@nestjs/graphql";
import { ParkingSpaceResolverBase } from "./base/parkingSpace.resolver.base";
import { ParkingSpace } from "./base/ParkingSpace";
import { ParkingSpaceService } from "./parkingSpace.service";

@graphql.Resolver(() => ParkingSpace)
export class ParkingSpaceResolver extends ParkingSpaceResolverBase {
  constructor(protected readonly service: ParkingSpaceService) {
    super(service);
  }
}
