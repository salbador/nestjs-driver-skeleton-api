import { Module } from '@nestjs/common';
import { GetTerminalShiftsController } from './getterminalshifts.controller';
import { GetTerminalShiftsService } from './getterminalshifts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetTerminalShiftsSchema } from './schemas/getterminalshifts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetTerminalShifts', schema: GetTerminalShiftsSchema}
    ])
  ],
  controllers: [GetTerminalShiftsController],
  providers: [GetTerminalShiftsService]
})
export class GetTerminalShiftsModule {}
