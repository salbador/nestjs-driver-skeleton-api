import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Backend Api for Truck Online Checkin to be implemented by a checkPreloadings')
    .setDescription('An ongoing intiative to provide an industry Standard Service to allow Truck checkPreloadingss and Hauliers to conduct Online Checkin.')
    .setVersion('2.0')
    .addTag('checkpreloadings')
    .addTag('tasmanian_devil')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs/api', app, document);
  await app.listen(3000);
}
bootstrap();
