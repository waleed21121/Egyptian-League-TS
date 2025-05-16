import * as Z from 'zod';
import {teamStatusEnum} from '../utils/getEnums';


const TeamSchema = Z.object({
    name: Z.string().min(5, {message: "The name must be at least 5 characters"}),
    shirtColor: Z.enum(['red', 'blue', 'white', 'green', 'black', 'yellow']).default('white'),
    foundationYear: Z.coerce.number().int().positive().default(1900),
    city: Z.string(),
    stadiumName: Z.string(),
    status: teamStatusEnum.default("ACTIVE").optional()
});

export type Team = Z.infer<typeof TeamSchema>;
export {TeamSchema}
