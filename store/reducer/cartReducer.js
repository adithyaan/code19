const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        arr: [...state.arr, action.newItem],
      };
    default:
      return state;
  }
};

export default cartReducer;
