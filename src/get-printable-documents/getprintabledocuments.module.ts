import { Module } from '@nestjs/common';
import { GetPrintableDocumentsController } from './getprintabledocuments.controller';
import { GetPrintableDocumentsService } from './getprintabledocuments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetPrintableDocumentsSchema } from './schemas/getprintabledocuments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetPrintableDocuments', schema: GetPrintableDocumentsSchema}
    ])
  ],
  controllers: [GetPrintableDocumentsController],
  providers: [GetPrintableDocumentsService]
})
export class GetPrintableDocumentsModule {}
