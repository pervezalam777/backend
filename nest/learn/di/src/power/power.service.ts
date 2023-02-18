import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

  supplyPower(watt: number) {
    console.log('Watt', watt);
  }
}
