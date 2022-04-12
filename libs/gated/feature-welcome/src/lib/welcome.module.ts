import { Module } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { WelcomeResolver } from './welcome.resolver';
import {
  GatedDataAccessModule,
  DataWelcomeModule,
} from '@v-thomas/gated/data-access';

@Module({
  providers: [WelcomeResolver, WelcomeService],
  imports: [GatedDataAccessModule, DataWelcomeModule],
})
export class WelcomeModule {}
