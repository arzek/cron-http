import { Injectable, HttpService } from '@nestjs/common';

import * as https from 'https';

@Injectable()
export class CollectorService {
  API = 'https://213.136.81.132:8000/ua/Dictionary.svc/Locations?lang=ua';
  agent;
  httpConfig = {};

  constructor(private readonly httpService: HttpService) {
    this.agent = new https.Agent({
      rejectUnauthorized: false,
    });
    this.httpConfig = {
      httpsAgent: this.agent,
    };
  }

  async main() {
    const res = await this.httpService
      .get(this.API, this.httpConfig)
      .toPromise();

    console.log(11111);
  }
}
