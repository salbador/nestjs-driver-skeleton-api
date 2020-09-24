import { Module } from '@nestjs/common';
import { PrintDocumentsController } from './printdocuments.controller';
import { PrintDocumentsService } from './printdocuments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrintDocumentsSchema } from './schemas/printdocuments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'PrintDocuments', schema: PrintDocumentsSchema}
    ])
  ],
  controllers: [PrintDocumentsController],
  providers: [PrintDocumentsService]
})
export class PrintDocumentsModule {}
