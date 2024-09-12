import express from 'express';
import jobControllers from '../controllers/job.js';

const router = express.Router();

router.get('/jobs', async function (req, res, next) {
  res.json(await jobControllers.getMyJobs(req, res)); // Pass `req` to get query parameters
});

export default router;
