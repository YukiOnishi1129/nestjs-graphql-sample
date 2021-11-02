import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
/* models */
import { Recipe } from './models/recipe';

@Resolver('Recipes')
export class RecipesResolver {
  //   constructor(recipeTable: Recipe[]) {}
  //   recipeTable: Recipe[] = [
  //     {
  //       id: '1',
  //       title: '鯖の味噌煮',
  //     },
  //     {
  //       id: '2',
  //       title: 'ミートソーススパゲティ',
  //     },
  //     {
  //       id: '3',
  //       title: '豚の生姜焼',
  //     },
  //   ];
  //   @Query((returns) => [Recipe])
  //   async recipes(): Promise<Recipe[]> {
  //     return this.recipeTable;
  //   }
}
