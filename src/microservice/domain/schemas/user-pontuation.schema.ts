/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type UserPontuationDocument = UserPontuation & Document;

@Schema({
  timestamps: true,
  collection: DependencyEntityTokens.USER_PONTUATION
})
export class UserPontuation extends AbstractSchema {
  @Prop({ required: true })
  languageWord: string;

  @Prop({ required: true })
  languageAnswer: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false, default: 0 })
  rightWords: number;

  @Prop({ required: false, default: 0 })
  wrongWords: number;

  @Prop({ required: false, default: 0 })
  points: number;

  @Prop({ required: false, default: 0 })
  lifeCost: number;

  @Prop({ required: false, default: 0 })
  usedTips: number;

  @Prop({ required: false, default: 0 })
  usedSkips: number;

  @Prop({ required: false, default: 0 })
  perfectWords: number;

  @Prop({ required: false, default: 0 })
  totalCampaigns: number;

  @Prop({ required: false, default: 0 })
  totalRounds: number;
}

const schema = SchemaFactory.createForClass(UserPontuation);
export const UserPontuationSchema = schema;
