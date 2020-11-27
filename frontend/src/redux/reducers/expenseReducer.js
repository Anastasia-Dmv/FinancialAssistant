import transactionConstants from '../constants/transactionConstants';

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default expenses;
