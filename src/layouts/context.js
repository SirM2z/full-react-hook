import React, { useReducer } from 'react';

const LayoutContext = React.createContext();

const initValue = {
  isOpen: true
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'CHANGE':
      return { ...state, ...{ isOpen: action.payload.isOpen } };
    default:
      return state;
  }
}

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initValue);
  return <LayoutContext.Provider value={props.children}></LayoutContext.Provider>;
};

const ContextConsumer = LayoutContext.Consumer;

export { LayoutContext, ContextProvider, ContextConsumer };
