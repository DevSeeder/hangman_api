/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractDomain } from '@devseeder/nestjs-microservices-commons';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type TagDocument = Tag & Document;

@Schema({
  timestamps: true,
  collection: DependencyEntityTokens.TAGS
})
export class Tag extends AbstractDomain {}

const schema = SchemaFactory.createForClass(Tag);
schema.index({ key: 1 }, { unique: true });
schema.index({ name: 1 }, { unique: true });

export const TagsSchema = schema;
