const express = require('express');
const expressValidator = require('express-validator');

const {
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

const router = express.Router();
router.use(expressValidator());

/* todo útfæra api */

router.get('/', async (req, res, next) => {
  await readAll()
    .then((data) => {
      res.status(200)
        .json({
          data,
        });
    })
    .catch(err => next(err));
});

router.post('/', async (req, res, next) => {
  await create(req.body)
    .then((data) => {
      res.status(200)
        .json({
          data,
        });
    })
    .catch(err => next(err));
});

router.get('/:id', async (req, res, next) => {
  await readOne(req.params.id)
    .then((data) => {
      res.status(200)
        .json({
          data,
        });
    })
    .catch(err => next(err));
});
router.put('/:id', async (req, res, next) => {
  await update(req.params.id, req.body)
    .then((data) => {
      res.status(200)
        .json({
          data,
        });
    })
    .catch(err => next(err));
});

router.delete('/:id', async (req, res, next) => {
  await del(req.params.id)
    .then(res.send(''))
    .catch(err => next(err));
});

module.exports = router;
