import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ContentsModule } from './contents/contents.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { RecommendationsModule } from './recommendations/recommendations.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/recomendation'),UsersModule, ContentsModule, SharedModule, RecommendationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
