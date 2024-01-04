import { DependencyEntityTokens } from 'src/microservice/application/app.constants';
import { ModelEntityTokens } from '@devseeder/nestjs-microservices-commons';
import { User, UsersSchema } from '../schemas/users.schema';
import { Word, WordsSchema } from '../schemas/words.schema';
import { Campaign, CampaignsSchema } from '../schemas/campaign.schema';
import { Round, RoundsSchema } from '../schemas/round.schema';
import {
  CampaignStatus,
  CampaignStatusSchema
} from '../schemas/campaign-status.schema';
import { RoundStatus, RoundStatusSchema } from '../schemas/round-status.schema';
import {
  UserPontuation,
  UserPontuationSchema
} from '../schemas/user-pontuation.schema';

export const EntitySetupConfig: ModelEntityTokens = {
  users: {
    modelName: User.name,
    schema: UsersSchema,
    collection: DependencyEntityTokens.USER
  },
  words: {
    modelName: Word.name,
    schema: WordsSchema,
    collection: DependencyEntityTokens.WORD
  },
  campaigns: {
    modelName: Campaign.name,
    schema: CampaignsSchema,
    collection: DependencyEntityTokens.CAMPAIGN
  },
  rounds: {
    modelName: Round.name,
    schema: RoundsSchema,
    collection: DependencyEntityTokens.ROUND
  },
  campaignStatus: {
    modelName: CampaignStatus.name,
    schema: CampaignStatusSchema,
    collection: DependencyEntityTokens.CAMPAIGN_STATUS
  },
  roundStatus: {
    modelName: RoundStatus.name,
    schema: RoundStatusSchema,
    collection: DependencyEntityTokens.ROUND_STATUS
  },
  userPontuation: {
    modelName: UserPontuation.name,
    schema: UserPontuationSchema,
    collection: DependencyEntityTokens.USER_PONTUATION
  }
};