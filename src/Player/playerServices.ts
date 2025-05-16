import { UUID } from "crypto";
import {prismaClient, Prisma} from "../config/prisma";
import { PlayerQueryObjectI } from "../interfaces/ApiFeaturesInterace";
import { PlayerQueryParameters } from "../schemas/queryParametersSchema";
import { Player } from "./playerSchema";
import { UpdatePlayerI } from "../schemas/updatePlayerSchema";


export async function getAllPlayers (query: PlayerQueryParameters) {
    const queryObject = getQueryObject(query);
    const players = await prismaClient.player.findMany(queryObject);
    return players;
}

export async function getPlayerById (id: UUID) {
    const player = await prismaClient.player.findUnique({
        where: {
            id: id
        }
    })
    return player;
}

export async function addNewPlayer (player: Player) {
    const createdPlayer = await prismaClient.player.create({data: player});
    return createdPlayer;
}

export async function updatePlayer (id: UUID, data: UpdatePlayerI) {
    const player = prismaClient.player.update({
        where: {
            id: id
        },
        data: data
    })
    return player
}

export async function deletePlayer (id: UUID) {
    const player =  prismaClient.player.delete({
        where:{
            id: id
        }
    })
    return player;
} 

function getQueryObject (query: PlayerQueryParameters): PlayerQueryObjectI {
    let args: PlayerQueryObjectI = {};

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

                args.select![ele as keyof Prisma.PlayerSelect] = true;
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
                args.orderBy!.push(obj as Prisma.PlayerOrderByWithRelationInput)
            }
        })
    }

    // The rest of properties are the where condition
    const remainingFields = Object.keys(query);
    remainingFields.forEach((field) => {
        if (Object.keys(prismaClient.team.fields).includes(field)) {
            const value = query[field as keyof PlayerQueryParameters];
            if (value !== undefined && value !== null && value !== '') {
                
                if(!args.where) {
                    args.where = {};
                }
                
                (args.where as any)[field] = value;
            }
        }
    });
    return args;
}
