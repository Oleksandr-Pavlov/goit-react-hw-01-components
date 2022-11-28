import PropTypes from 'prop-types';

export function Statistics({ stat: { label, percentage } }) {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
}

Statistics.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}
