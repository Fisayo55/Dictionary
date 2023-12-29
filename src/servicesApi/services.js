export const getWordDefinition = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch word definition");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const wordSuggestion = async (word) => {
  try {
    const response = await fetch(`https://api.datamuse.com/sug?s=${word}`);

    if (!response.ok) throw new Error("No such word available");

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
