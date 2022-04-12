import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import {
  GatedDataAccessModule,
  UserRepository,
} from '@v-thomas/gated/data-access';

@Module({
  providers: [UsersResolver],
  imports: [GatedDataAccessModule],
})
export class UsersModule {}
