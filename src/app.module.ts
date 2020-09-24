import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { MongooseModule } from '@nestjs/mongoose'
import { CheckPreloadingsModule } from './check-preloadings/check-preloadings.module';
import { GetUserDataByDriverPinModule } from './get-user-data-by-driver-pin/get-user-data-by-driver-pin.module';
import { GetVehiclesAtLocationModule } from './get-vehicles-at-location/get-vehicles-at-location.module';
import { GetWeightModule } from './get-weight/get-weight.module';
import { InitiateWeigingModule } from './initiate-weiging/initiate-weiging.module';
import { CheckDriverModule } from './check-driver/check-driver.module';
import { CheckVehiclesModule } from './check-vehicles/check-vehicles.module';
import { CheckDriverLoadingAdrModule } from './check-driver-loading-adr/check-driver-loading-adr.module';
import { CheckVehicleLoadingAdrModule } from './check-vehicle-loading-adr/check-vehicle-loading-adr.module';
import { CheckTransportAvailabilityModule } from './check-transport-availability/check-transport-availability.module';
import { CheckAdditionalInformationModule } from './check-additional-information/check-additional-information.module';
import { CheckCompartmentPositionsModule } from './check-compartment-positions/check-compartment-positions.module';
import { CheckPerloadingsModule } from './check-perloadings/check-perloadings.module';
import { ConvertToUomModule } from './convert-to-uom/convert-to-uom.module';
import { GetTerminalShiftsModule } from './get-terminal-shifts/get-terminal-shifts.module';
import { GetVehicleInfoModule } from './get-vehicle-info/get-vehicle-info.module';
import { GetAuthIdProfileModule } from './get-auth-id-profile/get-auth-id-profile.module';
import { GetAuthPositionsModule } from './get-auth-positions/get-auth-positions.module';
import { GetAdditionalInfoTermplatesModule } from './get-additional-info-termplates/get-additional-info-termplates.module';
import { GetCheckinHeadersModule } from './get-checkin-headers/get-checkin-headers.module';
import { GetCheckinModule } from './get-checkin/get-checkin.module';
import { GetAdditionalTerminalServicesModule } from './get-additional-terminal-services/get-additional-terminal-services.module';
import { GetPrintableDocumentsModule } from './get-printable-documents/get-printable-documents.module';
import { CancelCheckinModule } from './cancel-checkin/cancel-checkin.module';
import { SetCheckinModule } from './set-checkin/set-checkin.module';
import { SetCheckinStatusModule } from './set-checkin-status/set-checkin-status.module';
import { SetAdditionalTerminalServicesModule } from './set-additional-terminal-services/set-additional-terminal-services.module';
import { PrintDocumentsModule } from './print-documents/print-documents.module';
import { RecalculateCompartmentPositionsModule } from './recalculate-compartment-positions/recalculate-compartment-positions.module';
import 'dotenv/config';

// Make sure to create .env file with
// something like this:
// MONGO_URI='mongodb://localhost:27017/10-fatzcode-restbe-drivers'

@Module({
  imports: [
    DriverModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {useNewUrlParser: true}),
    CheckPreloadingsModule,
    GetUserDataByDriverPinModule,
    GetVehiclesAtLocationModule,
    GetWeightModule,
    InitiateWeigingModule,
    CheckDriverModule,
    CheckVehiclesModule,
    CheckDriverLoadingAdrModule,
    CheckVehicleLoadingAdrModule,
    CheckTransportAvailabilityModule,
    CheckAdditionalInformationModule,
    CheckCompartmentPositionsModule,
    CheckPerloadingsModule,
    ConvertToUomModule,
    GetTerminalShiftsModule,
    GetVehicleInfoModule,
    GetAuthIdProfileModule,
    GetAuthPositionsModule,
    GetAdditionalInfoTermplatesModule,
    GetCheckinHeadersModule,
    GetCheckinModule,
    GetAdditionalTerminalServicesModule,
    GetPrintableDocumentsModule,
    CancelCheckinModule,
    SetCheckinModule,
    SetCheckinStatusModule,
    SetAdditionalTerminalServicesModule,
    PrintDocumentsModule,
    RecalculateCompartmentPositionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
