import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { tech: "React " };
export const store = createStore(reducer, initialState);
