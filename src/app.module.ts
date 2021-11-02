import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
/* resolvers */
import { AuthorResolver } from './authors/authors.resolver';

@Module({
  providers: [AuthorResolver],
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
    }),
    // forRootのオプションに設定したものが、Apolloインスタンスに渡される
  ],
})
export class AppModule {}
