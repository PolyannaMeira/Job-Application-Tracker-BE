import express from 'express';
import jobControllers from '../controllers/job.js';

const router = express.Router();

router.get('/jobs', async (req, res) => {
    try {
        const jobs = await jobControllers.getMyJobs();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/jobs/filter', async (req, res) => {
    const { filter } = req.query;
    try {
        const filteredJobs = await jobControllers.selectedFilter({
            jobType: filter
        });
        res.json(filteredJobs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/jobs/sort', async (req, res) => {
    const { order } = req.query;
    try {
        const sortedJobs = await jobControllers
            .sortOrder()
            .sort({ companyName: order === 'Ascending' ? 1 : -1 });
        res.json(sortedJobs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/jobs/search', async (req, res) => {
    const { query } = req.query;
    try {
        const searchResults = await jobControllers.searchQuery({
            jobTitle: { $regex: query, $options: 'i' }
        });
        res.json(searchResults);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
// router.get('/jobs', async function (req, res, next) {
//     res.json(await jobControllers.getMyJobs());
// });

export default router;
