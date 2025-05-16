import { UUID } from "crypto";
import { AddNewPlayer, DeletePlayer, GetAllPlayers, GetPlayerById, UpdatePlayer } from "../middlewares/playerValidators";
import { addNewPlayer, deletePlayer, getAllPlayers, getPlayerById, updatePlayer } from "./playerServices";
import { Player } from "./playerSchema";

export const getAllPlayersController: GetAllPlayers = async (req, res, next) => {
    const players = await getAllPlayers(req.query);
    res.status(200).send({
        data: players
    })
}

export const getPlayerByIdController: GetPlayerById = async (req, res, next) => {
    const player = await getPlayerById(req.params.id as UUID)
    res.status(200).send({
        data: player
    })
}

export const addNewPlayerController: AddNewPlayer = async (req, res, next) => {
    const player = await addNewPlayer(req.body as Player);
    res.status(201).send({
        data: player
    })
}

export const updatePlayerController: UpdatePlayer = async (req, res, next) => {
    const player = await getPlayerById(req.params.id as UUID);
    if (!player) {
        // error handling
    }

    const updatedPlayer = await updatePlayer(req.params.id as UUID, req.body);

    res.status(200).send({
        data: updatedPlayer
    })
}


export const deletePlayerController: DeletePlayer = async (req, res, next) => {
    const player = getPlayerById(req.params.id as UUID);
    if (!player) {
        // error handling
    }

    const deletedPlayer = await deletePlayer(req.params.id as UUID)
    res.status(200).send({
        data: deletedPlayer
    })
}