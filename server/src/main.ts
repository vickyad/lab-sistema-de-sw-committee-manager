import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './all_exceptions.filter'
import { AppModule } from './app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(
      new ValidationPipe({
         // whitelist: true,
         // skipUndefinedProperties: true
         transform: true,
         //transformOptions: { enableImplicitConversion: true },
      }),
   );

   app.enableCors();
   // const { httpAdapter } = app.get(HttpAdapterHost);
   // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
   await app.listen(3000);
}
bootstrap();
