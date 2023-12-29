import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWordDefinition, wordSuggestion } from "../servicesApi/services";

const initialState = {
  search: [
    {
      word: "hello",
      phonetic: "/həˈləʊ",
      phonetics: [
        {
          text: "/həˈləʊ",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
        },
        {
          text: "hɛˈləʊ",
        },
      ],
      origin:
        "early 19th century: variant of earlier hollo ; related to holla.",
      meanings: [
        {
          partOfSpeech: "exclamation",
          definitions: [
            {
              definition:
                "used as a greeting or to begin a phone conversation.",
              example: "hello there, Katie!",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "an utterance of ‘hello’; a greeting.",
              example: "she was getting polite nods and hellos from people",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "say or shout ‘hello’.",
              example: "I pressed the phone button and helloed",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
  ],
  value: "",
  status: "idle",
  error: "",
  suggestions: [],
};

export const fetchWord = createAsyncThunk(
  "search/fetchWord",
  async function (word) {
    const newWord = await getWordDefinition(word);
    return newWord;
  }
);

export const wordSuggestions = createAsyncThunk(
  "search/wordSuggestions",
  async (word) => {
    const suggestion = await wordSuggestion(word);

    return suggestion;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWord.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWord.fulfilled, (state, action) => {
        state.status = "idle";
        state.search = action.payload; // Assuming action.payload is the word definition
      })
      .addCase(fetchWord.rejected, (state, action) => {
        state.status = "error";
        state.search = initialState.search;
        state.error = action.error.message;
      })
      .addCase(wordSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })
      .addCase(wordSuggestions.rejected, (state, action) => {
        state.suggestions = initialState.suggestions;
        // Handle other error-related state changes if needed
      }),
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
