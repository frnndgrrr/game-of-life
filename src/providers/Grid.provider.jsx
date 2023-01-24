import { createContext, useReducer } from "react";
import gridReducer from '../reducers/Grid.reducer'
import { generateRandomGrid } from "../utils/functions";

const rows = 50;
const cols = 65;

const initState = {
  grid: generateRandomGrid(cols, rows),
  rows,
  cols,
  tick: 500
}

const GridContext = createContext();
export default GridContext;

export function GridProvider({ children }) {
  const [state, dispatch] = useReducer(gridReducer, initState);
  const { grid, rows, cols } = state;

  return (
    <GridContext.Provider
      value={{
        grid,
        rows,
        cols,
        dispatch
      }}
    >
      {children}
    </GridContext.Provider>
  );
}
