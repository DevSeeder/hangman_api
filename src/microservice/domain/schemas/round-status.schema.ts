/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractDomain } from '@devseeder/nestjs-microservices-commons';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type RoundStatusDocument = RoundStatus & Document;

@Schema({
  timestamps: true,
  collection: DependencyEntityTokens.ROUND_STATUS
})
export class RoundStatus extends AbstractDomain {}

const schema = SchemaFactory.createForClass(RoundStatus);
schema.index({ key: 1 }, { unique: true });
schema.index({ name: 1 }, { unique: true });

export const RoundStatusSchema = schema;
