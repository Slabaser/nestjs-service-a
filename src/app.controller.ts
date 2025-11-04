import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'sum' })
  sum(@Payload() data: number[]): number {
    console.log('--- service-a: Received request for "sum" ---');
    console.log('Incoming Data:', data);

    const total = data.reduce((a, b) => a + b, 0);

    console.log('Calculated Total:', total);

    return total;
  }
}
