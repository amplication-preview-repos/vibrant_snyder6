import { Module } from "@nestjs/common";
import { ParkingSpaceModuleBase } from "./base/parkingSpace.module.base";
import { ParkingSpaceService } from "./parkingSpace.service";
import { ParkingSpaceController } from "./parkingSpace.controller";
import { ParkingSpaceResolver } from "./parkingSpace.resolver";

@Module({
  imports: [ParkingSpaceModuleBase],
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService, ParkingSpaceResolver],
  exports: [ParkingSpaceService],
})
export class ParkingSpaceModule {}
