const express = require('express')
const Cars = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware');
const router = express.Router();

router.get('/', (req,res,next) => {
    Cars.getAll()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        next(err)
    })  
})

router.get('/:id', checkCarId, (req,res) => {
    res.status(200).json(req.car)
})

router.post('/', checkCarPayload,
checkVinNumberValid, checkVinNumberUnique, (req,res,next) => {
    Cars.create(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            next(err)
        })
})

router.put('/:id', checkCarId, checkCarPayload, (req,res,next) => {
     const {id} = req.params;
     Cars.update(id, req.body)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            next(err)
        })
 })

 router.delete('/:id', checkCarId, (req,res,next) => {
     const {id} = req.params;
     Cars.remove(id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            next(err)
        })
 })

// eslint-disable-next-line no-unused-vars
router.use((err,req,res,next) => {
    res.status(500).json({
        message:"error!",
        error:err.message
    })
})

module.exports = router;