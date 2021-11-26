import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from './RandomColor'

export default function Statistics(props) {
  const { title, stats } = props;
  // const randomColor = '#' + Math.floor(Math.random() * 256);
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id} style={{ backgroundColor: randomColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
