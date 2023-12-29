import { useSelector } from "react-redux";

const Origin = () => {
  const origin = useSelector((state) => state.search.search[0]?.origin);
  return (
    <>
      <div className="sm:leading-10 leading-5 font-semibold sm:text-lg">
        <hr />
        {origin}
      </div>
    </>
  );
};

export default Origin;
