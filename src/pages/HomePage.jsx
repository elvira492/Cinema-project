import MovieT from "../components/MovieTEST";

const Homepage = () => {
  return (
    <div>
      Homepage
      <div className="flex flex-wrap justify-around">
        <MovieT movieIndex={1} />
        <MovieT movieIndex={2} />
        <MovieT movieIndex={3} />
        <MovieT movieIndex={4} />
        <MovieT movieIndex={5} />
        <MovieT movieIndex={6} />
        <MovieT movieIndex={7} />
        <MovieT movieIndex={8} />
      </div>
    </div>
  );
};

export default Homepage;
