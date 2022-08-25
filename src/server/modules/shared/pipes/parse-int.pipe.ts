import { BadRequestException } from '@nestjs/common';
// import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  // async transform(value: string, metadata: ArgumentMetadata) {
  async transform(value: string) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
