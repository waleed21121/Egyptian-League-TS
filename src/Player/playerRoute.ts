import { Router } from "express";
import { addNewPlayerVaidator, deletePlayerValidator, getAllPlayersValidator, getPlayerByIdValidator, updatePlayerValidator } from "../middlewares/playerValidators";
import { addNewPlayerController, deletePlayerController, getAllPlayersController, getPlayerByIdController, updatePlayerController } from "./playerController";


const playerRouter = Router();

playerRouter.route('/').get(getAllPlayersValidator, getAllPlayersController)
                .post(addNewPlayerVaidator, addNewPlayerController)

playerRouter.route('/:id').get(getPlayerByIdValidator, getPlayerByIdController)
                .patch(updatePlayerValidator, updatePlayerController)
                .delete(deletePlayerValidator, deletePlayerController)

export default playerRouter