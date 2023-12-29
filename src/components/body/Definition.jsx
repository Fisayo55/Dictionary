import { useSelector } from "react-redux";

const Definition = () => {
  const meanings = useSelector((state) => state.search.search[0]?.meanings);

  return (
    <div className="sm:leading-10 leading-5 font-semibold sm:text-lg">
      {meanings &&
        meanings.map((POS, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-amber-500 font-semibold text-2xl">
              {POS.partOfSpeech}
            </h2>

            <ul className="list-disc ml-6">
              {POS.definitions.map((def, i) => (
                <li key={i}>
                  <p>{def.definition}</p>
                  <p className="italic text-sky-700">{def.example}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Definition;
