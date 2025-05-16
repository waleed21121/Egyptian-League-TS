import {getAllTeams, getTeamById, createNewTeam, updateTeam} from './teamServices';

import { AddNewTeam, GetAllTeams, GetTeamById, UpdateTeam } from '../middlewares/teamValidators';
import { UUID } from 'crypto';
import { Team } from './teamSchema';



export const getAllTeamsController: GetAllTeams = async (req, res, next) => {
    const teams = await getAllTeams(req.query);
    res.status(200).send({
        data: teams
    })
} 

export const getTeamByIdController: GetTeamById = async (req, res, next) => {
    const team = await getTeamById(req.params.id as UUID);
    res.status(200).send({
        data: team
    })
}

export const addNewTeamController: AddNewTeam = async (req, res, next) => {
    const team = await createNewTeam(req.body as Team);
    res.status(201).send({
        data: team
    })
}

export const updateTeamController: UpdateTeam = async (req, res, next) => {
    let team = await getTeamById(req.params.id as UUID);
    if (!team) {
        // error Handling
    }

    const updatedTeam = await updateTeam(req.params.id as UUID, req.body);
    res.status(200).send({
        data: updatedTeam
    })
}