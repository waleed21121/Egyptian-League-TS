import { UUID } from "crypto";
import {prismaClient, Prisma} from "../config/prisma";
import { TeamQueryObjectI } from "../interfaces/ApiFeaturesInterace";
import { TeamQueryParameters } from "../schemas/queryParametersSchema";
import { Team } from './teamSchema';
import { UpdateTeamI } from "../schemas/updateTeamSchema";

export async function getAllTeams (query: TeamQueryParameters) {
    const obj = getQueryObject(query);
    const teams = await prismaClient.team.findMany(obj);
    return teams;
}

export async function getTeamById (id: UUID) {
    const team = await prismaClient.team.findUnique({
        where: {
            id: id
        },
        include: {
            players: true
        }
    });
    return team;
}

export async function createNewTeam (team: Team) {
    const createdTeam = await prismaClient.team.create({data: team});
    return createdTeam;
}

export async function getTeamByName (teamName: string) {
    const teams = await prismaClient.team.findMany({
        where: {
            name: {
                contains: teamName
            }
        }
    })
    return teams;
}

export async function updateTeam (id: UUID, data: UpdateTeamI) {
    const team = await prismaClient.team.update({
        where: {
            id: id
        },
        data: data
    })

    return team;
}

function getQueryObject (query: TeamQueryParameters): TeamQueryObjectI {
    let args: TeamQueryObjectI = {};

    const page = Math.max(query.page || 1, 1);
    const limit = Math.min(Math.max(query.limit || 20, 1), 20);
    const offset = (page - 1) * limit;
    args.take = limit;
    args.skip = offset;

    if (query.select) {
        const fields = query.select.split(',');
        fields.forEach((ele) => {
            if (Object.keys(prismaClient.team.fields).includes(ele)) {

                if(!args.select) {
                    args.select = {};
                }

                args.select![ele as keyof Prisma.TeamSelect] = true;
            }
        })
    }

    if (query.sort) {
        const sortBy = query.sort.split(',');
        sortBy.forEach((ele) => {
            if (Object.keys(prismaClient.team.fields).includes(ele)) {

                if(!args.orderBy) {
                    args.orderBy = [];
                }
                
                const obj  = {[ele]: 'asc'} 
                args.orderBy!.push(obj as Prisma.TeamOrderByWithRelationInput)
            }
        })
    }

    // The rest of properties are the where condition
    const remainingFields = Object.keys(query);
    remainingFields.forEach((field) => {
        if (Object.keys(prismaClient.team.fields).includes(field)) {
            const value = query[field as keyof TeamQueryParameters];
            if (value !== undefined && value !== null) {
                
                if(!args.where) {
                    args.where = {};
                }

                console.log(field, value);
                (args.where as any)[field as keyof Prisma.TeamWhereInput] = value;
            }
        }
    });
    return args;
}
