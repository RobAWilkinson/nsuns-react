import React, { Component } from 'react';
import './AccessoryBox.css';
import { connect } from 'react-redux';
import { addAccessory, createAccessoryPlan, editAccessory } from '../../actions';

class AccessoryBox extends Component {
  state = {
    accIndex: null,
    dayIndex: null,
    title: '',
    sets: 0,
    reps: 0,
    weight: 0,
    currentlyEditing: false,
  };
  addAccessory = async () => {
    const { dispatch, userAuth, dayIndex, accessoryState } = this.props;
    const { userId } = userAuth;
    const { accessoryPlan } = accessoryState;
    // console.log('accessoryState:', accessoryState, accessoryPlan, accessoryState[accessoryPlan]);

    if (!Object.keys(accessoryState).includes('custom')) {
      dispatch(createAccessoryPlan(userId, accessoryState[accessoryPlan]));
    }
    // addAccessory(userId, dayIndex);
  };

  deleteAcc = (dayIndex, accIndex) => {
    console.log(dayIndex, accIndex);
  };
  editAcc = async (dayIndex, accIndex, title, sets, reps, weight) => {
    const { accessoryState } = this.props;
    const { accessoryPlan } = accessoryState;
    const { currentlyEditing } = this.state;
    const { userId } = this.props.userAuth;
    if (currentlyEditing) {
      this.setState({ currentlyEditing: false });
      const { title, sets, reps, weight } = this.state;
      const accessoryObject = { title, sets, reps, weight, dayIndex, accIndex, userId };
      if (!accessoryState.custom) accessoryObject.basePlan = accessoryState[accessoryPlan];
      this.props.dispatch(editAccessory(accessoryObject));
      this.setState({ accIndex: null });
    } else {
      this.setState({ currentlyEditing: true });
      this.setState({ dayIndex, accIndex, title, sets, reps, weight });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { accessories, userAuth, dayIndex } = this.props;
    const accessoryItems = accessories.map((exercise, accIndex) => {
      const { title, sets, reps, weight } = exercise;
      return (
        <div key={dayIndex + accIndex} className="accessory__item">
          {userAuth.loggedIn && (
            <div className="accessory__item-icons">
              <button onClick={() => this.deleteAcc(dayIndex, accIndex)}>X</button>
              <img
                onClick={() => this.editAcc(dayIndex, accIndex, title, sets, reps, weight)}
                src={
                  this.state.accIndex === accIndex ? './save_icon.svg' : './pencil-edit-button.svg'
                }
              />
            </div>
          )}
          {this.state.accIndex === accIndex ? (
            <div className="accessory__item-inputs">
              <input onChange={this.onChange} type="text" name={'title'} value={this.state.title} />
              <div>
                <input
                  onChange={this.onChange}
                  type="number"
                  name={'sets'}
                  value={this.state.sets}
                />
                <input
                  onChange={this.onChange}
                  type="number"
                  name={'reps'}
                  value={this.state.reps}
                />
              </div>
              <input
                onChange={this.onChange}
                type="number"
                name={'weight'}
                value={this.state.weight}
              />
            </div>
          ) : (
            <div className="accessory_items-spans">
              <span>{exercise.title}</span>
              <span>
                {exercise.sets} x {exercise.reps}
              </span>
              <span>{exercise.weight}</span>
            </div>
          )}
        </div>
      );
    });

    return (
      <div className="accessory__container">
        <div className="accessory__container-titles">
          <h4 />
          <h4>Title</h4>
          <h4>SetsxReps</h4>
          <h4>Weight(lbs)</h4>
        </div>
        {accessoryItems}
        {userAuth.loggedIn && <button onClick={this.addAccessory}>Add Accessory</button>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userAuth: state.userAuth,
  accessoryState: state.accessories,
});

export default connect(mapStateToProps)(AccessoryBox);