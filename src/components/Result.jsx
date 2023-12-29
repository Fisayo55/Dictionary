import Definition from "./body/Definition";
import Head from "./body/Head";

import Origin from "./body/Origin";

const Result = () => {
  return (
    <div className="bg-stone-50 sm:m-4 sm:p-5 p-2 m-1.5">
      <Head />
      <Definition />
      <Origin />
    </div>
  );
};

export default Result;
