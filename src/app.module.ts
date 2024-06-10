import { Module } from '@nestjs/common';
import { PaymnetsModule } from './paymnets/paymnets.module';

@Module({
  imports: [PaymnetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
