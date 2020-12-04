import useReduxState from '../../../hooks/useReduxState';

const useIndicators = () => {
  const { userInfo, userTransactions } = useReduxState();
  const { monthBalance, incomePercentageToSavings } = userInfo;
  const { transaction } = userTransactions;
  const amount = Math.abs(Number(transaction.amount));
  const freeMoney =
    (monthBalance - amount) * (1 - incomePercentageToSavings / 100);
  const today = new Date();
  const allMonthDays = daysInMonth(today.getMonth(), today.getFullYear());
  const restDays = allMonthDays - today.getDate() + 1;
  const dailyLimit = (freeMoney / restDays).toFixed(2);
  const monthLimit = (freeMoney - amount).toFixed(2);
  return { dailyLimit, monthLimit };
};

export default useIndicators;

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
