export interface INameState {
  value: string;
}

export interface INameAction {
  type: 'CHANGE_NAME';
  payload: string;
}

const initialNameState = {
  value: ''
}

const nameReducer = (state: INameState, action: INameAction) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, value: action.payload };
    default:
  }
  return state;
};

export { nameReducer, initialNameState}