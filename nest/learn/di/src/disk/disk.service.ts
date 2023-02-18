import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService){}

  getData() {
    console.log('user 20 watt from power service');
    this.powerService.supplyPower(20);
    return 'This is the data';
  }
}
