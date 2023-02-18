import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

  constructor(
    private cupService: CpuService,
    private diskService: DiskService
  ){}

  @Get('/compute')
  compute() {
    return this.cupService.compute(20, 30);
  }

  @Get('/data')
  getData(){
    return this.diskService.getData();
  }
}

