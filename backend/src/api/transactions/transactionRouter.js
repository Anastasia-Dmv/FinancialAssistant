const express = require('express');
const transactionRouter = express.Router();
const {
  createTransaction,
    getTransactionCategories,
} = require('./transaction.controller');
const { authorize } = require('../../utils.js/authMiddleware');
const { validate } = require('../../utils.js/validate');
const Joi = require('joi');

const addTransactionSchema = Joi.object({
  amount: Joi.number().required(),
  transactionDate: Joi.number().required(),
  type: Joi.string().required(),
  comment: Joi.string(),
  category: Joi.string(),
  userId: Joi.object(),
});

transactionRouter.post(
  '/',
  authorize,
  validate(addTransactionSchema),
  createTransaction,
);
transactionRouter.get('/categories', authorize, getTransactionCategories);

module.exports = transactionRouter;
