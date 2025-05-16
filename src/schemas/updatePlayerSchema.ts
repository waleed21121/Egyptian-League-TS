import { z } from "zod";
import { PlayerSchema } from "../Player/playerSchema";

export const UpdatePlayerSchema = PlayerSchema.partial();

export type UpdatePlayerI = z.infer<typeof UpdatePlayerSchema>;