import { Injectable } from '@nestjs/common';
import { CreatePaymnetDto } from './dto/create-paymnet.dto';
import { UpdatePaymnetDto } from './dto/update-paymnet.dto';

@Injectable()
export class PaymnetsService {
  create(createPaymnetDto: CreatePaymnetDto) {
    return 'This action adds a new paymnet';
  }

  findAll() {
    return `This action returns all paymnets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymnet`;
  }

  update(id: number, updatePaymnetDto: UpdatePaymnetDto) {
    return `This action updates a #${id} paymnet`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymnet`;
  }
}
