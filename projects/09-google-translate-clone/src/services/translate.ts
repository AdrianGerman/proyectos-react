import { Configuration, OpenAiApi } from "openai";
import { SUPPORTED_LANGUAGES } from "../constants";

const apiKey = import.meta.env.VITE_OPEN_API_KEY;

const configuration = new Configuration({ apiKey });
