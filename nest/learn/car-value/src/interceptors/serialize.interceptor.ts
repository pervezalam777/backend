import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer'; 

interface ClassConstructor {
  new (...args: any[]):{}
}

export function Serialize(dto: ClassConstructor){
  return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {

  constructor(private dto: ClassConstructor) {}
  intercept(context:ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before the request is handled by the request handler
    //console.log('Run before request handler', context);
    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        //console.log('run before response sent out', data)
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true
        })
      })
    )
  }
}