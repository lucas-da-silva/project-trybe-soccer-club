import { Router } from 'express';
import { LeaderboardController } from '../controllers';
import { LeaderboardService } from '../services';

const router = Router();

const service = new LeaderboardService();
const controller = new LeaderboardController(service);

router.get('/home', controller.getHomeTeams);

export default router;
