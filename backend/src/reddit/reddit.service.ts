import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RedditService {
  private readonly baseUrl: string = 'https://www.reddit.com';
  private readonly clientId: string = process.env.REDDIT_CLIENT_ID;
  private readonly secretKey: string = process.env.REDDIT_SECRET_KEY;
  private readonly username: string = process.env.REDDIT_USERNAME;
  private readonly password: string = process.env.REDDIT_PASSWORD;

  private accessToken: string | null = null;

  constructor(private readonly httpService: HttpService) {}

  async authenticate() {
    const url = `${this.baseUrl}/api/v1/access_token`;
    const data = `grant_type=password&username=${this.username}&password=${this.password}`;
    const auth = Buffer.from(`${this.clientId}:${this.secretKey}`).toString(
      'base64',
    );

    const res = await firstValueFrom(
      this.httpService.post(url, data, {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    );
    this.accessToken = res.data.access_token;
  }
}
