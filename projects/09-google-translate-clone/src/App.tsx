import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import "./App.css";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  formText: "",
  result: "",
  loading: false
};

function reducer(state, action) {
  const { type, payload } = action;

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
      fromLanguage: payload
    };
  }

  if (type === "SET_TO_LANGUAGES") {
    return {
      ...state,
      toLanguages: payload
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: ""
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: payload
    };
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Google translate</h1>
      </div>
    </>
  );
}

export default App;
