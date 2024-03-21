import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // Update the line below
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
