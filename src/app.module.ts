import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
/* modules */
import { RecipesModule } from './recipes/recipes.module';
/* resolvers */
import { AuthorResolver } from './authors/authors.resolver';

@Module({
  providers: [AuthorResolver],
  imports: [
    // forRootのオプションに設定したものが、Apolloインスタンスに渡される
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql', // 自動的にルートディレクトリ直下にスキーマファイルが生成される
    }),
    RecipesModule,
  ],
})
export class AppModule {}
