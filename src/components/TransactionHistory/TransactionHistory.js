import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
  return (
    <table className={s.transactionHistory}>
  <thead>
    <tr className={s.threadtitle}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={s.tablebody}>
      {items.map(({type, amount, currency, id}) => (
        <tr className={s.tablerow}key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
      ))}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}