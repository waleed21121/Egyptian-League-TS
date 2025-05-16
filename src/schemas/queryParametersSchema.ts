import * as Z from 'zod';
import {TeamSchema} from '../Team/teamSchema'
import {PlayerSchema} from '../Player/playerSchema'


const QueryParametersSchema = Z.object({
    page: Z.coerce.number().int().positive().optional(),
    limit: Z.coerce.number().int().positive().optional(),
    sort: Z.string().optional(),
    select: Z.string().optional(),
    include: Z.string().optional()
});

export const TeamQueryParametersSchema = QueryParametersSchema.merge(TeamSchema.partial());
export type TeamQueryParameters = Z.infer<typeof TeamQueryParametersSchema>;
export const PlayerQueryParametersSchema = QueryParametersSchema.merge(PlayerSchema.partial());
export type PlayerQueryParameters = Z.infer<typeof PlayerQueryParametersSchema>;
export type QueryParameters = Z.infer<typeof QueryParametersSchema>;
