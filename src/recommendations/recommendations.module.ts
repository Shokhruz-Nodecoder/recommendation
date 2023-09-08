import { Module } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsController } from './recommendations.controller';
import { UsersService } from 'src/users/users.service';
import { ContentsService } from 'src/contents/contents.service';

@Module({
  imports : [UsersService,ContentsService],
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
})
export class RecommendationsModule {}
