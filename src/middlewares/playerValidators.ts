import { z } from 'zod';
import validationMiddleware from './validationMiddleware';
import { PlayerQueryParametersSchema } from '../schemas/queryParametersSchema';
import { IdSchema } from '../schemas/idSchema';
import { PlayerSchema } from '../Player/playerSchema';
import { UpdatePlayerSchema } from '../schemas/updatePlayerSchema';



export const getAllPlayersValidator = validationMiddleware(z.object({}), PlayerQueryParametersSchema, z.object({}));
export type GetAllPlayers = typeof getAllPlayersValidator

export const getPlayerByIdValidator = validationMiddleware(z.object({}), z.object({}), IdSchema);
export type GetPlayerById = typeof getPlayerByIdValidator

export const addNewPlayerVaidator = validationMiddleware(PlayerSchema, z.object({}), z.object({}));
export type AddNewPlayer = typeof addNewPlayerVaidator

export const updatePlayerValidator = validationMiddleware(UpdatePlayerSchema, z.object({}), IdSchema);
export type UpdatePlayer = typeof updatePlayerValidator

export const deletePlayerValidator = validationMiddleware(z.object({}), z.object({}), IdSchema);
export type DeletePlayer = typeof deletePlayerValidator