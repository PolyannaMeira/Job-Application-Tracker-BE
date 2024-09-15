import query from '../config/db.js';

const jobControllers = {
    getMyJobs: async (req, res) => {
        return query('SELECT * FROM jobs where 1=1');
    }
};

export default jobControllers;
