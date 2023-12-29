import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.search.error);
  console.log(error);
  return (
    <div className="flex justify-center items-center font-semibold h-screen sm:text-3xl">
      Error: ❌ {error}
    </div>
  );
};

export default Error;
