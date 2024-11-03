import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RedditModule } from './reddit/reddit.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RedditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
