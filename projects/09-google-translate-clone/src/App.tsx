import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import "./App.css";
import { Action, type State } from "./types.d";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    };
  }

  if (type === "SET_FROM_LANGUAGES") {
    return {
      ...state,
      fromLanguage: action.payload
    };
  }

  if (type === "SET_TO_LANGUAGES") {
    return {
      ...state,
      toLanguages: action.payload
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ""
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload
    };
  }

  return state;
}

function App() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log({ fromLanguage });

  return (
    <>
      <div>
        <h1>Google translate</h1>
        <button
          onClick={() => {
            dispatch({ type: "SET_FROM_LANGUAGES", payload: "es" });
          }}
        >
          Cambiar loading
        </button>
      </div>
    </>
  );
}

export default App;
