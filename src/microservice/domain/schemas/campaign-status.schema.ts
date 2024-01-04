/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractDomain } from '@devseeder/nestjs-microservices-commons';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type CampaignStatusDocument = CampaignStatus & Document;

@Schema({
  timestamps: true,
  collection: DependencyEntityTokens.CAMPAIGN_STATUS
})
export class CampaignStatus extends AbstractDomain {}

const schema = SchemaFactory.createForClass(CampaignStatus);
schema.index({ key: 1 }, { unique: true });
schema.index({ name: 1 }, { unique: true });

export const CampaignStatusSchema = schema;
