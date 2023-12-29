import "../index.css";
const Loader = () => {
  return (
    <div className="absolute flex items-center justify-center inset-0 backdrop-blur">
      <div className="loader"></div>;
    </div>
  );
};

export default Loader;
