/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type WordDocument = Word & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.WORD })
export class Word extends AbstractSchema {
  @Prop({ required: true })
  word: string;

  @Prop({ required: false })
  languageRef: string;

  @Prop({ required: false })
  difficult: number;

  @Prop({ required: true })
  translations: TranslationAnswer[];

  @Prop({ required: false, default: [] })
  tags: string[] = [];
}

export interface TranslationAnswer {
  locale: string;
  value: string;
}

const schema = SchemaFactory.createForClass(Word);
schema.index({ word: 1, languageWord: 1 }, { unique: true });
export const WordsSchema = schema;
