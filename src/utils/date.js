const startOfAdjacentMonth = ({ date, month = 0 }) => (
  (
    (date) => (new Date(Date.UTC(date.getFullYear(), date.getMonth()+month, 1)))
  )(date instanceof Date ? date : !!date ? new Date(date) : new Date())
);

const endOfAdjacentMonth = ({ date, month = 0 }) => (
  (
    (date) => new Date(Date.UTC(date.getFullYear(), date.getMonth()+1+month, 0))
  )(date instanceof Date ? date : !!date ? new Date(date) : new Date())
);

module.exports = {
  startOfAdjacentMonth,
  endOfAdjacentMonth
};
