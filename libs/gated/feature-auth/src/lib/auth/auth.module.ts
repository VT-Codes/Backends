import { Module } from '@nestjs/common';
import {
  DataAuthModule,
  GatedDataAccessModule,
} from '@v-thomas/gated/data-access';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthResolver],
  imports: [GatedDataAccessModule],
})
export class AuthModule {}
