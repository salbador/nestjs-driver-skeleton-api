import { Module } from '@nestjs/common';
import { TempletusController } from './templetus.controller';
import { TempletusService } from './templetus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TempletusSchema } from './schemas/templetus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Templetus', schema: TempletusSchema}
    ])
  ],
  controllers: [TempletusController],
  providers: [TempletusService]
})
export class TempletusModule {}
