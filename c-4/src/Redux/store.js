// create store here

import { legacy_createStore as createStore,compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./reducer";

const rootreducer = combineReducers({data: reducer})

const ownthunk =(store)=>(next)=>(action)=>{

  if(typeof action ==="function"){
    return action(store.dispatch)

    
  }
  next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(ownthunk),
        // other store enhancers if any
      );


export const store = createStore(rootreducer,enhancer
  );

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}


