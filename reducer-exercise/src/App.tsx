import { useReducer } from "react";

type State = {
  fontSize: number;
  darkMode: boolean;
};

type Action = {
  type: "darkMode" | "increment" | "decrement";
};

function reducer(state: State, action: Action): State {
  if (action.type == "increment") {
    return { ...state, fontSize: state.fontSize + 1 };
  }

  if (action.type == "decrement") {
    if (state.fontSize < 11) return {...state};
    return { ...state, fontSize: state.fontSize - 1 };
  }

  if (action.type == "darkMode") {
    return { ...state, darkMode: !state.darkMode };
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    fontSize: 16,
    darkMode: false,
  });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        fontSize: state.fontSize,
        backgroundColor: state.darkMode ? "black" : "white",
        color: state.darkMode ? "white" : "black",
      }}
    >
      <h1>Hook useReducer</h1>
      <p>{state?.fontSize}</p>
      <p>{!state?.darkMode ? "Light" : "Dark"}</p>
      <button
        style={{
          fontSize: state.fontSize,
          backgroundColor: state.darkMode ? "black" : "white",
          color: state.darkMode ? "white" : "black",
        }}
        onClick={() => dispatch({ type: "darkMode" })}
      >
        Toggle Dark Mode
      </button>
      <button
        style={{
          fontSize: state.fontSize,
          backgroundColor: state.darkMode ? "black" : "white",
          color: state.darkMode ? "white" : "black",
        }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Increase Font Size
      </button>
      <button
        style={{
          fontSize: state.fontSize,
          backgroundColor: state.darkMode ? "black" : "white",
          color: state.darkMode ? "white" : "black",
        }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrease Font Size
      </button>
    </div>
  );
}

export default App;
