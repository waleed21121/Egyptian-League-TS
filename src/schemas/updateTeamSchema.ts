
import { z } from "zod";
import { TeamSchema } from "../Team/teamSchema";

export const UpdateTeamSchema = TeamSchema.partial();

export type UpdateTeamI = z.infer<typeof UpdateTeamSchema>;