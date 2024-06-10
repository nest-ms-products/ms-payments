import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymnetsService } from './paymnets.service';
import { CreatePaymnetDto } from './dto/create-paymnet.dto';
import { UpdatePaymnetDto } from './dto/update-paymnet.dto';

@Controller('paymnets')
export class PaymnetsController {
  constructor(private readonly paymnetsService: PaymnetsService) {}

  @Post()
  create(@Body() createPaymnetDto: CreatePaymnetDto) {
    return this.paymnetsService.create(createPaymnetDto);
  }

  @Get()
  findAll() {
    return this.paymnetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymnetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymnetDto: UpdatePaymnetDto) {
    return this.paymnetsService.update(+id, updatePaymnetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymnetsService.remove(+id);
  }
}
