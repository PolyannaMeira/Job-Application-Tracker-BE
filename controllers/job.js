import query from '../config/db.js';


const jobControllers = {
    getMyJobs: async (req, res) => {
        return query('SELECT * FROM jobs');
    }
};

export default jobControllers;
