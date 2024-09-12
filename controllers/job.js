import query from '../config/db.js';


const jobControllers = {
    getMyJobs: async (req, res) => {
      const { filter, sort, order } = req.query; // Get query parameters from the request
  
      let sql = 'SELECT * FROM jobs';
  
      // Handle filtering
      if (filter) {
        if (filter === 'Interview Planned') {
          sql += ' WHERE interviewPlanned = 1';
        } else if (filter === 'Interview Not Planned') {
          sql += ' WHERE interviewPlanned = 0';
        } else if (filter === 'Favorites') {
          sql += ' WHERE favorites = 1';
        }
      }
  
      // Handle sorting
      if (sort) {
        sql += ` ORDER BY ${sort}`;
        if (order) {
          sql += ` ${order}`; // 'ASC' or 'DESC'
        }
      }
  
      return query(sql);
    },
  };
  
  export default jobControllers;