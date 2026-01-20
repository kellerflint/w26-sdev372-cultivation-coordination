import express from 'express';
import {getPlants} from '../controllers/getPlants.js'
import {getPlots} from '../controllers/getPlots.js'

const router = express.Router()

router.get('/api/plants', getPlants)
router.get('/api/plots', getPlots)

export default router