import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentSchema } from 'src/shared/models/content.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : "Content", schema : ContentSchema}])],
  controllers: [ContentsController],
  providers: [ContentsService],
  exports : [ContentsService]
})
export class ContentsModule {}
