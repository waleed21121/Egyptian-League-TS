import { z } from 'zod';
import validationMiddleware from './validationMiddleware';
import { TeamQueryParametersSchema } from '../schemas/queryParametersSchema';
import { IdSchema } from '../schemas/idSchema';
import { TeamSchema } from '../Team/teamSchema';
import { UpdateTeamSchema } from '../schemas/updateTeamSchema';



export const getAllTeamsValidator = validationMiddleware(z.object({}), TeamQueryParametersSchema, z.object({}));
export type GetAllTeams = typeof getAllTeamsValidator

export const getTeamByIdValidator = validationMiddleware(z.object({}), z.object({}), IdSchema);
export type GetTeamById = typeof getTeamByIdValidator

export const addNewTeamVaidator = validationMiddleware(TeamSchema, z.object({}), z.object({}));
export type AddNewTeam = typeof addNewTeamVaidator

export const updateTeamValidator = validationMiddleware(UpdateTeamSchema, z.object({}), IdSchema);
export type UpdateTeam = typeof updateTeamValidator