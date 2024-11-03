import { Controller, Get } from '@nestjs/common';
import { RedditService } from './reddit.service';

@Controller('reddit')
export class RedditController {
  constructor(private readonly redditService: RedditService) {}

  @Get('authenticate')
  async authenticate() {
    return this.redditService.authenticate();
  }
}
