import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ContentsService } from 'src/contents/contents.service';
// import { UserDto } from 'src/users/dto/create-user.dto';
// import { ContentDto } from 'src/contents/dto/create-content.dto';

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly userService: UsersService,
    private readonly contentService: ContentsService,
  ) {}

  async getRecommendations(userId: string) {
    const user = await this.userService.findById(userId);

    if (!user) {
      return [];
    }

    const userInterests = user.interest;
    const content = await this.contentService.findAll();

    const recommendedContent = content.filter((item) =>
      item.tags.some((tag) => userInterests.includes(tag))
    );

    recommendedContent.sort((a, b) => b.likes - a.likes);

    return recommendedContent;
  }
}
