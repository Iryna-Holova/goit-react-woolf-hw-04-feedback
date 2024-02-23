import generateColor from 'components/helpers/generate-color';
import css from './Statistics.module.css';

const Statistics = ({ stats, total, positivePercentage }) => (
  <>
    <ul className={css.stats_list}>
      {stats.map((option, i) => (
        <li className={css.stats_item} key={i}>
          {option[0]}: {option[1]}
        </li>
      ))}
    </ul>
    <div
      className={css.summary}
      style={{ backgroundColor: generateColor(positivePercentage) }}
    >
      <span>Total: {total}</span>
      <span>Positive Percentage: {positivePercentage}%</span>
    </div>
  </>
);

export default Statistics;
