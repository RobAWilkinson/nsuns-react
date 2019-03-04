import React from 'react';
import { connect } from 'react-redux';
import { selectStandard } from '../../actions/';

function StandardSelector(props) {
  const handleChange = e => {
    props.dispatch(selectStandard(e.target.value));
  };
  return (
    <div>
      <p>Standard: </p>
      <select value={props.userLifts.standard} onChange={handleChange}>
        <option value="lbs">Lbs</option>
        <option value="kg">Kg</option>
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  userLifts: state.userLifts,
});

export default connect(mapStateToProps)(StandardSelector);