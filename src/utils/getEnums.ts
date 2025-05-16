import { TeamStatus, PlayerPosition } from "../../generated/prisma";
import z from 'zod'

const teamStatusArray = Object.values(TeamStatus);
export const teamStatusEnum = z.enum([teamStatusArray[0], ...teamStatusArray.slice(1)]);

const playerPositionsArray = Object.values(PlayerPosition);
export const playerPoitionEnum = z.enum([playerPositionsArray[0], ...playerPositionsArray.slice(1)]);



