import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { transactionOperations } from '../../redux/operations';
import { transactionSelectors } from '../../redux/selectors';
import ExpenseItemCategory, {
  expensesCategories,
} from './ExpenseItemCategory/ExpenseItemCategory';

const ExpenseListCats = ({ date }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionSelectors.getExpensesCats);
  useEffect(() => {
    dispatch(transactionOperations.getTransactionsCats(date));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, date]);
  return (
    <>
      {transactions && (
        <ul>
          {expensesCategories.map(item => {
            const cat = Object.keys(item)[0];
            if (!transactions[cat]) {
              return null;
            }
            return <ExpenseItemCategory key={cat} category={cat} />;
          })}
        </ul>
      )}
      <SpriteSvg xmlns="http://www.w3.org/2000/svg" id="svg-sprite">
        <symbol id="cafe" viewBox="0 0 18 18">
          <path d="M16.2002 13.65L9.75019 8.8125V8.13C10.9877 7.7625 11.8502 6.5025 11.5727 5.0925C11.3777 4.11 10.5977 3.2925 9.61519 3.0675C7.90519 2.6775 6.37519 3.975 6.37519 5.625H7.87519C7.87519 5.0025 8.37769 4.5 9.00019 4.5C9.62269 4.5 10.1252 5.0025 10.1252 5.625C10.1252 6.255 9.60769 6.765 8.97769 6.75C8.57269 6.7425 8.25019 7.0875 8.25019 7.4925V8.8125L1.80019 13.65C1.22269 14.085 1.53019 15 2.25019 15H9.00019H15.7502C16.4702 15 16.7777 14.085 16.2002 13.65ZM4.50019 13.5L9.00019 10.125L13.5002 13.5H4.50019Z" />
        </symbol>
        <symbol id="other" viewBox="0 0 18 18">
          <path d="M10.6274 10.2825L11.6774 8.4675C11.7449 8.355 11.7149 8.2125 11.6174 8.13L10.5074 7.26C10.5299 7.095 10.5449 6.9225 10.5449 6.75C10.5449 6.5775 10.5299 6.405 10.5074 6.2325L11.6174 5.3625C11.7149 5.28 11.7449 5.1375 11.6774 5.025L10.6274 3.21C10.5599 3.0975 10.4249 3.0525 10.3049 3.0975L8.99988 3.6225C8.72988 3.4125 8.43738 3.24 8.11488 3.105L7.91988 1.7175C7.89738 1.5975 7.78488 1.5 7.65738 1.5H5.55738C5.42988 1.5 5.31738 1.5975 5.29488 1.725L5.09988 3.1125C4.78488 3.2475 4.48488 3.42 4.21488 3.63L2.90988 3.105C2.78988 3.06 2.65488 3.105 2.58738 3.2175L1.53738 5.0325C1.46988 5.145 1.49988 5.2875 1.59738 5.37L2.70738 6.24C2.68488 6.405 2.66988 6.5775 2.66988 6.75C2.66988 6.9225 2.68488 7.095 2.70738 7.2675L1.59738 8.1375C1.49988 8.22 1.46988 8.3625 1.53738 8.475L2.58738 10.29C2.65488 10.4025 2.78988 10.4475 2.90988 10.4025L4.21488 9.8775C4.48488 10.0875 4.77738 10.26 5.09988 10.395L5.29488 11.7825C5.31738 11.9025 5.42988 12 5.55738 12H7.65738C7.78488 12 7.89738 11.9025 7.91988 11.775L8.11488 10.3875C8.42988 10.2525 8.72988 10.08 8.99988 9.87L10.3049 10.395C10.4249 10.44 10.5599 10.395 10.6274 10.2825ZM6.60738 8.25C5.78238 8.25 5.10738 7.575 5.10738 6.75C5.10738 5.925 5.78238 5.25 6.60738 5.25C7.43238 5.25 8.10738 5.925 8.10738 6.75C8.10738 7.575 7.43238 8.25 6.60738 8.25Z" />
          <path d="M16.4399 14.0025L15.7199 13.4475C15.7349 13.3425 15.7499 13.23 15.7499 13.1175C15.7499 13.005 15.7424 12.8925 15.7199 12.7875L16.4324 12.2325C16.4924 12.18 16.5149 12.09 16.4699 12.015L15.7949 10.8525C15.7574 10.7775 15.6674 10.755 15.5849 10.7775L14.7524 11.115C14.5799 10.98 14.3924 10.8675 14.1824 10.785L14.0549 9.9C14.0474 9.81 13.9724 9.75 13.8974 9.75H12.5549C12.4724 9.75 12.3974 9.81 12.3899 9.8925L12.2624 10.7775C12.0599 10.8675 11.8649 10.9725 11.6924 11.1075L10.8599 10.77C10.7849 10.74 10.6949 10.77 10.6499 10.845L9.97493 12.0075C9.93743 12.0825 9.94493 12.1725 10.0124 12.225L10.7249 12.78C10.7099 12.885 10.7024 12.9975 10.7024 13.11C10.7024 13.2225 10.7099 13.335 10.7249 13.44L10.0124 13.995C9.95243 14.0475 9.92993 14.1375 9.97493 14.2125L10.6499 15.375C10.6874 15.45 10.7774 15.4725 10.8599 15.45L11.6924 15.1125C11.8649 15.2475 12.0524 15.36 12.2624 15.4425L12.3899 16.3275C12.4049 16.41 12.4724 16.47 12.5549 16.47H13.8974C13.9799 16.47 14.0549 16.41 14.0624 16.3275L14.1899 15.4425C14.3924 15.3525 14.5874 15.2475 14.7524 15.1125L15.5924 15.45C15.6674 15.48 15.7574 15.45 15.8024 15.375L16.4774 14.2125C16.5224 14.145 16.4999 14.055 16.4399 14.0025ZM13.2224 14.1225C12.6674 14.1225 12.2099 13.6725 12.2099 13.11C12.2099 12.5475 12.6599 12.0975 13.2224 12.0975C13.7849 12.0975 14.2349 12.5475 14.2349 13.11C14.2349 13.6725 13.7774 14.1225 13.2224 14.1225Z" />
        </symbol>
        <symbol id="food" viewBox="0 0 18 18">
          <path d="M15.7875 13.17L2.31 13.875L2.25 12.75L15.735 12.045L15.7875 13.17ZM15.75 14.61H2.25V15.735H15.75V14.61ZM16.5 3.75V9C16.5 9.825 15.825 10.5 15 10.5H3C2.175 10.5 1.5 9.825 1.5 9V3.75C1.5 2.925 2.175 2.25 3 2.25H15C15.825 2.25 16.5 2.925 16.5 3.75ZM15 4.5C13.74 4.5 12.72 5.235 12.5925 6.1725C12.1125 5.625 10.545 4.125 7.6875 4.125C4.185 4.125 2.625 6.375 2.625 6.375C2.625 6.375 4.185 8.625 7.6875 8.625C10.545 8.625 12.1125 7.125 12.5925 6.5775C12.72 7.515 13.74 8.25 15 8.25V4.5Z" />
        </symbol>
        <symbol id="clothes" viewBox="0 0 18 18">
          <path d="M16.2002 13.65L9.75019 8.8125V8.13C10.9877 7.7625 11.8502 6.5025 11.5727 5.0925C11.3777 4.11 10.5977 3.2925 9.61519 3.0675C7.90519 2.6775 6.37519 3.975 6.37519 5.625H7.87519C7.87519 5.0025 8.37769 4.5 9.00019 4.5C9.62269 4.5 10.1252 5.0025 10.1252 5.625C10.1252 6.255 9.60769 6.765 8.97769 6.75C8.57269 6.7425 8.25019 7.0875 8.25019 7.4925V8.8125L1.80019 13.65C1.22269 14.085 1.53019 15 2.25019 15H9.00019H15.7502C16.4702 15 16.7777 14.085 16.2002 13.65ZM4.50019 13.5L9.00019 10.125L13.5002 13.5H4.50019Z" />
        </symbol>
        <symbol id="home" viewBox="0 0 18 18">
          <path d="M14.25 6.975V3H12V4.95L9 2.25L1.5 9H3.75V15H7.5V10.5H10.5V15H14.25V9H16.5L14.25 6.975ZM7.5 7.5C7.5 6.675 8.175 6 9 6C9.825 6 10.5 6.675 10.5 7.5H7.5Z" />
        </symbol>
        <symbol id="transport" viewBox="0 0 18 18">
          <path d="M9 3H3.75C2.505 3 1.5 4.005 1.5 5.25V11.25C1.5 12.495 2.505 13.5 3.75 13.5L3 14.25V15H3.75L5.25 13.4775L6.75 13.5V9.75H3V4.485L9.75 4.5V6H11.25V5.25C11.25 4.005 10.245 3 9 3ZM3.75 10.5C4.1625 10.5 4.5 10.8375 4.5 11.25C4.5 11.6625 4.1625 12 3.75 12C3.3375 12 3 11.6625 3 11.25C3 10.8375 3.3375 10.5 3.75 10.5ZM15.4275 7.245C15.3225 6.945 15.0375 6.75 14.7 6.75H9.3075C8.9625 6.75 8.685 6.945 8.5725 7.245L7.5 10.3275L7.5075 14.46C7.5075 14.745 7.74 15 8.025 15H8.49C8.775 15 9 14.715 9 14.43V13.5H15V14.43C15 14.715 15.2325 15 15.5175 15H15.975C16.26 15 16.4925 14.745 16.4925 14.46L16.5 13.4325V10.3275L15.4275 7.245ZM9.3075 7.5H14.7L15.4725 9.75H8.535L9.3075 7.5ZM9 12C8.5875 12 8.25 11.6625 8.25 11.25C8.25 10.8375 8.5875 10.5 9 10.5C9.4125 10.5 9.75 10.8375 9.75 11.25C9.75 11.6625 9.4125 12 9 12ZM15 12C14.5875 12 14.25 11.6625 14.25 11.25C14.25 10.8375 14.5875 10.5 15 10.5C15.4125 10.5 15.75 10.8375 15.75 11.25C15.75 11.6625 15.4125 12 15 12Z" />
        </symbol>
      </SpriteSvg>
    </>
  );
};

export default ExpenseListCats;

const SpriteSvg = styled.svg`
  display: none;
`;
