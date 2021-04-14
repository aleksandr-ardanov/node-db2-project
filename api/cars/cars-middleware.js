const Cars = require('./cars-model')
const vinValidator = require('vin-validator');


const checkCarId = async (req, res, next) => {
  const {id} = req.params;
  const car = await Cars.getById(id);
  if (car){
    req.car = car;
    next()
  }
  else{
    res.status(404).json({ message: `car with id ${id} is not found`})
  }
}

const checkCarPayload = (req, res, next) => {
  const failed = (detail) => res.status(400).json({message:`${detail} is missing`})
  const {vin, make, model, mileage} = req.body;
  if (vin && make && model && mileage){
    next()
  }
  else if (!vin){
    failed('vin')
  }
  else if (!make){
    failed('make')
  }
  else if (!model){
    failed('model')
  }
  else if (!mileage){
    failed('mileage')
  }
}

const checkVinNumberValid = (req, res, next) => {
  const {vin} = req.body;
  const isValidVin = vinValidator.validate(vin);
  isValidVin
  ? next()
  : res.status(400).json({ message:`vin ${vin} is invalid`})
}

const checkVinNumberUnique = async (req, res, next) => {
  const all = await Cars.getAll();
  const {vin} = req.body;
  const check = all.some(car => car.vin === vin)
  check
  ? res.status(400).json({ message:`vin ${vin} already exists`})
  : next()
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}