import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeatureGuildsModule } from '@v-thomas/gated/feature-guilds';
import { FeatureAuthModule } from '@v-thomas/gated/feature-auth';
import { FeatureWelcomeModule } from '@v-thomas/gated/feature-welcome';
import { FeatureUsersModule } from '@v-thomas/gated/feature-users';

@Module({
  imports: [
    FeatureGuildsModule,
    FeatureAuthModule,
    FeatureWelcomeModule,
    FeatureUsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['libs/gated/**/*.gql'],
      include: [
        FeatureGuildsModule,
        FeatureAuthModule,
        FeatureWelcomeModule,
        FeatureUsersModule,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
