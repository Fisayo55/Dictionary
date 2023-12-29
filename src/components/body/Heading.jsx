import { useSelector } from "react-redux";

const Heading = () => {
  const word = useSelector((state) => state.search.search[0].word);
  const phonetics = useSelector(
    (state) => state.search.search[0]?.phonetics[0]
  );
  return (
    <div>
      <h1 className="text-sky-700 font-bold text-2xl sm:text-6xl">{word}</h1>
      <p className="text-amber-500 sm:text-xl py-4"> {phonetics?.text}</p>
    </div>
  );
};

export default Heading;
