import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Root route for {{ tmplr.project_name }}");
});

const indexRouter = router;
export default indexRouter;