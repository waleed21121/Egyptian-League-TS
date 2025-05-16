import * as Z from 'zod';
import {playerPoitionEnum} from '../utils/getEnums';


const PlayerSchema = Z.object({
    firstName: Z.string().min(5, {message: "The first name must be at least 5 characters"}),
    lastName: Z.string().min(5, {message: "The last name must be at least 5 characters"}),
    position: playerPoitionEnum.default("GK"),
    dateOfBirth: Z.string().datetime().default("1990-01-01T00:00:00.000Z"),
    nationality: Z.string().default("USA"),
    jerseyNumber: Z.coerce.number().int().min(1).max(99),
    salary: Z.coerce.number().positive().default(100000),
    teamId: Z.string().uuid()
});

export type Player = Z.infer<typeof PlayerSchema>;
export {PlayerSchema}
