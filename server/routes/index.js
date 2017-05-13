const messageRouter = require('./messages');
const userRouter = require('./users');
const readerRouter = require('./readers');
const sceneRouter = require('./scenes');
const blockRouter = require('./block');

const router = require('express').Router();

module.exports = router;

router.use(messageRouter);
router.use(userRouter);
router.use(readerRouter);
router.use(sceneRouter);
router.use(blockRouter);
