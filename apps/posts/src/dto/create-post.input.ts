import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;
}
