import { combineReducers } from 'redux';
import userConstants from '../constants/userConstants';

const initialState = {
  user: {
    info: {
      balance: 0,
      totalSalary: 0,
      passiveIncome: 0,
      incomePercentageToSavings: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
    },
    transaction: {
      category: '',
      amount: 0,
      comment: '',
    },
  },
};

const info = (state = initialState.user.info, { type, payload }) => {
  switch (type) {
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return { ...state, ...payload };

    case userConstants.UPDATE_USER_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

const transaction = (
  state = initialState.user.transaction,
  { type, payload },
) => {
  switch (type) {
    case userConstants.CHANGE_TRANSACTION_SUCCESS:
      return { ...state, ...payload };

    case userConstants.CREATE_TRANSACTION_SUCCESS:
      const { amount, category, comment } = payload;
      return { ...state, amount, category, comment };

    default:
      return state;
  }
};

export default combineReducers({ info, transaction });
