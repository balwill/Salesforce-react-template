import { createStore } from 'redux';

const initialState = {
  Prop1: 'test'
  // Props2: []
  // ...
};

const reducer = (state = initialState, action) => {
  // The .dispatcher() will trigger reducer()
  // Add if/then statements for how to resolve actions
  //
  // ====================================================
  // EXAMPLE:
  //
  // The code below doesn't update the 'initialState'
  // directly, it instead creates a copy and updates the
  // state of the 'copied' verion. This is how it SHOULD
  // be done
  // ====================================================
  //
  // if (action.type === 'ADD_POST') {
  //   return Object.assign({}, state, {
  //     posts: state.posts.concat(action.payload)
  //   })
  // }

  return state;
};

const store = createStore(reducer);

export default store;
