export interface ITextState {
  value: string;
}

export interface ITextAction {
  type: 'CHANGE_TEXT';
  payload: string;
}

const initialTextState = {
  value: ''
}

const textReducer = (state: ITextState, action: ITextAction) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, value: action.payload };
    default:
  }
  return state;
};

export { textReducer, initialTextState }