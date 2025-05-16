import { Prisma } from "../config/prisma";

export interface TeamQueryObjectI {
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput[];
    skip?: number;
    take?: number;
    select?: Prisma.TeamSelect;
    include?: Prisma.TeamInclude;
}

export interface PlayerQueryObjectI {
    where?: Prisma.PlayerWhereInput;
    orderBy?: Prisma.PlayerOrderByWithRelationInput[];
    skip?: number;
    take?: number;
    select?: Prisma.PlayerSelect;
    include?: Prisma.PlayerInclude;
}

//export type TotalQueryObjectI = TeamQueryObjectI | PlayerQueryObjectI;
