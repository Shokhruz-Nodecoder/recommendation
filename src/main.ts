import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Payment Project')
  .setDescription('This is a Stripe payment project')
  .addBearerAuth()
  .setVersion('0.0.1')

  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

app.setGlobalPrefix("api")
app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
