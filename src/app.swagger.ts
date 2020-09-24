import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Backend Api for Truck Online Checkin to be implemented by a checkPreloadings')
  .setDescription('An ongoing intiative to provide an industry Standard Service to allow Truck checkPreloadingss and Hauliers to conduct Online Checkin.')
  .setVersion('2.0')
  .addTag('checkpreloadings')
  .addTag('tasmanian_devil')
  .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
