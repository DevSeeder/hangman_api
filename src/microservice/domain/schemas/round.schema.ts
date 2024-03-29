/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type RoundDocument = Round & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.ROUND })
export class Round extends AbstractSchema {
  @Prop({ required: true })
  languageWord: string;

  @Prop({ required: true })
  languageAnswer: string;

  @Prop({ required: true })
  idWord: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  idCampaign: string;

  @Prop({ required: true })
  idStatus: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: false })
  difficult: number;

  @Prop({ required: true, default: 1 })
  sequence: number;

  @Prop({ required: false, default: 0 })
  points: number;

  @Prop({ required: false, default: 0 })
  lifeCost: number;

  @Prop({ required: false, default: 0 })
  usedTips: number;

  @Prop({ required: false, default: 0 })
  usedSkips: number;
}

const schema = SchemaFactory.createForClass(Round);
schema.index({ idCampaign: 1, sequence: 1 }, { unique: true });
export const RoundsSchema = schema;
