import Heading from "./Heading";
import Phonetics from "./Phonetics";

const Head = () => {
  return (
    <div className="flex justify-between">
      <Heading />
      <Phonetics />
    </div>
  );
};

export default Head;
