import { Router } from "express";

import { 
    addNewTeamVaidator,
    getAllTeamsValidator,
    getTeamByIdValidator, 
    updateTeamValidator 
} from "../middlewares/teamValidators";

import { 
    addNewTeamController,
    getAllTeamsController, 
    getTeamByIdController, updateTeamController 
} from "./teamController";

const teamRouter = Router();

teamRouter.route('/').get(getAllTeamsValidator, getAllTeamsController)
            .post(addNewTeamVaidator, addNewTeamController);

teamRouter.route('/:id').get(getTeamByIdValidator, getTeamByIdController)
            .patch(updateTeamValidator, updateTeamController);

export default teamRouter