const express = require('express');
const transactionRouter = express.Router();
const {
  createTransaction,
  getTransactionCategories,
} = require('./transaction.controller');
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { validate } = require('../../utils/validate');
const Joi = require('joi');

const addTransactionSchema = Joi.object({
  amount: Joi.number().required(),
  transactionDate: Joi.number().required(),
  type: Joi.string().required(),
  comment: Joi.string(),
  category: Joi.string(),
});

transactionRouter.post(
  '/',
  catchAsync(authorize),
  validate(addTransactionSchema),
  createTransaction,
);
transactionRouter.get(
  '/categories',
  catchAsync(authorize),
  getTransactionCategories,
);

module.exports = transactionRouter;
