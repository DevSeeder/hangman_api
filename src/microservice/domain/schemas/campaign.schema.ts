/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type CampaignDocument = Campaign & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.CAMPAIGN })
export class Campaign extends AbstractSchema {
  @Prop({ required: true })
  languageWord: string;

  @Prop({ required: true })
  languageAnswer: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  idStatus: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

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

  @Prop({ required: false, default: [] })
  tags: string[];

  @Prop({ required: false, default: 0 })
  perfectWords: number;
}

const schema = SchemaFactory.createForClass(Campaign);
export const CampaignsSchema = schema;
