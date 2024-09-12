import { useReducer } from "react";
import Button from "../Components/Button";
import Panel from "../Components/Panel";
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const stateReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case SET_VALUE_TO_ADD:
      state.value=action.payload;
      return;

    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;

    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return ;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(stateReducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: Number(e.target.value) || 0,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <>
      <Panel className="m-3">
        <h1 className="text-lg">count is {state.count}</h1>
        <div className="flex gap-2 mt-4">
          <Button onClick={increment}>increment</Button>
          <Button onClick={decrement}>decrement</Button>
        </div>
      </Panel>
      <form onSubmit={handleSubmit}>
        <label>
          Add in lot!
          <input
            value={state.valueToAdd || ""}
            onChange={handleChange}
            className="p-1 m-3  bg-gray-50 border border-gray-300 "
            type="number"
          />
        </label>
        <Button className="bg-blue-300 rounded-[14px] ">Add in!</Button>
      </form>
      {state.valueToAdd}
      <div>{state.count}</div>
    </>
  );
}
export default CounterPage;
