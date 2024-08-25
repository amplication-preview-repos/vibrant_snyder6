import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParkingSpaceService } from "./parkingSpace.service";
import { ParkingSpaceControllerBase } from "./base/parkingSpace.controller.base";

@swagger.ApiTags("parkingSpaces")
@common.Controller("parkingSpaces")
export class ParkingSpaceController extends ParkingSpaceControllerBase {
  constructor(protected readonly service: ParkingSpaceService) {
    super(service);
  }
}
