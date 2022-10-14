const startOfAdjacentMonth = ({ date, month = 0 }) => (
  (
    (date) => (new Date(Date.UTC(date.getFullYear(), date.getMonth()+month, 1)))
  )(date instanceof Date ? date : !!date ? new Date(date) : new Date())
);

const endOfAdjacentMonth = ({ date, month = 0 }) => (
  (
    (date) => {
      const ret = new Date(Date.UTC(date.getFullYear(), date.getMonth()+month, 31));

      if (ret.getDate() != 31)
        ret.setDate(ret.getDate()-1);

      return ret;
    }
  )(date instanceof Date ? date : !!date ? new Date(date) : new Date())
);

module.exports = {
  startOfAdjacentMonth,
  endOfAdjacentMonth
};
