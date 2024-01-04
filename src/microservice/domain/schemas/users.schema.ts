/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';
import { AbstractUser } from './abstract-users.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.USER })
export class User extends AbstractUser {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true, type: Object })
  userPoints: UserPoints;
}

export interface UserPoints {
  lifes: number;
  coins: number;
  skips: number;
  tips: number;
}

const schema = SchemaFactory.createForClass(User);
schema.index({ username: 1 }, { unique: true });
schema.index({ idUserAuth: 1 }, { unique: true });

export const UsersSchema = schema;
