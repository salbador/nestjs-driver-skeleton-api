import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'
import { CheckCompartmentPositionsModule } from './check-compartment-positions/check-compartment-positions.module';
import { CheckAdditionalInformationModule } from './check-additional-information/check-additional-information.module';
import { CheckTransportAvailabilityModule } from './check-transport-availability/check-transport-availability.module';
import { CheckVehicleLoadingAdrModule } from './check-vehicle-loading-adr/check-vehicle-loading-adr.module';
import { CheckDriverLoadingAdrModule } from './check-driver-loading-adr/check-driver-loading-adr.module';
import { CheckVehiclesModule } from './check-vehicles/check-vehicles.module';
import { CheckDriverModule } from './check-driver/check-driver.module';
import { InitiateWeigingModule } from './initiate-weiging/initiate-weiging.module';
import { GetWeightModule } from './get-weight/get-weight.module';
import { RecalculateCompartmentPositionsModule } from './recalculate-compartment-positions/recalculate-compartment-positions.module';
import { PrintDocumentsModule } from './print-documents/print-documents.module';
import { SetAdditionalTerminalServicesModule } from './set-additional-terminal-services/set-additional-terminal-services.module';
import { SetCheckinStatusModule } from './set-checkin-status/set-checkin-status.module';
import { SetCheckinModule } from './set-checkin/set-checkin.module';
import { CancelCheckinModule } from './cancel-checkin/cancel-checkin.module';
import { GetPrintableDocumentsModule } from './get-printable-documents/get-printable-documents.module';
import { GetAdditionalTerminalServicesModule } from './get-additional-terminal-services/get-additional-terminal-services.module';
import { GetCheckinModule } from './get-checkin/get-checkin.module';
import { GetCheckinHeadersModule } from './get-checkin-headers/get-checkin-headers.module';
import { GetAdditionalInfoTermplatesModule } from './get-additional-info-termplates/get-additional-info-termplates.module';
import { GetAuthPositionsModule } from './get-auth-positions/get-auth-positions.module';
import { GetAuthIdProfileModule } from './get-auth-id-profile/get-auth-id-profile.module';
import { GetVehicleInfoModule } from './get-vehicle-info/get-vehicle-info.module';
import { GetTerminalShiftsModule } from './get-terminal-shifts/get-terminal-shifts.module';
import { ConvertToUomModule } from './convert-to-uom/convert-to-uom.module';
import { CheckPreloadingsModule } from './check-preloadings/check-preloadings.module';

import 'dotenv/config';

// Make sure to create .env file with
// something like this:
// MONGO_URI='mongodb://localhost:27017/templatecollection'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {useNewUrlParser: true}),
    GetWeightModule,
    InitiateWeigingModule,
    CheckDriverModule,
    CheckVehiclesModule,
    CheckDriverLoadingAdrModule,
    CheckVehicleLoadingAdrModule,
    CheckTransportAvailabilityModule,
    CheckAdditionalInformationModule,
    CheckCompartmentPositionsModule,
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
    RecalculateCompartmentPositionsModule,
    CheckPreloadingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
