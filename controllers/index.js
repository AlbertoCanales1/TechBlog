const router = require ('express').Router();

const apiRoutes = require('./api');
const home_routes = require('./home_routes');

router.use('/', home_routes);
router.use('/api', apiRoutes);

module.exports = router;