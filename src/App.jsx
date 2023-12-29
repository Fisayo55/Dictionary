import { useSelector } from "react-redux";
import Loader from "./ui/Loader";
import { useEffect, useState } from "react";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";

const App = () => {
  const status = useSelector((state) => state.search.status);

  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      setIsloading(true);
      setError(false);
    } else if (status === "error") {
      setIsloading(false);
      setError(true);
    } else {
      setIsloading(false);
      setError(false);
    }
  }, [status]);

  return (
    <>
      <div className="bg-stone-100 h-screen">
        <SearchBar />
        {isLoading && <Loader />}
        {error ? <Error /> : <Container />}
      </div>
    </>
  );
};

export default App;
