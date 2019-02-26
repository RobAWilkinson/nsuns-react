export * from './userAuthActions';
export * from './userLiftActions';
export * from './accessoryActions';

export const addAccessories = (name, set, rep, weight) => {
  return {
    type: 'ADD_ACCESSORY',
    name,
    set,
    rep,
    weight,
  };
};
