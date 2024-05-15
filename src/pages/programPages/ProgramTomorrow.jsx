import Movie from "../../components/Movie";
import movieIDs from "../../components/fetch/movieIDs";
import { tomorrowDate } from "../../components/date";

function ProgramTomorrow() {
  return (
    <div>
      <h1>
        {tomorrowDate.day} {tomorrowDate.date}.{tomorrowDate.month}.
        {tomorrowDate.year}
      </h1>
      <div className="flex flex-wrap justify-center m-5">
        <h2>11am</h2>
        <Movie movieID={movieIDs.movie5} movieIndex={5} />
        <h2>2pm</h2>
        <Movie movieID={movieIDs.movie6} movieIndex={6} />
        <h2>5pm</h2>
        <Movie movieID={movieIDs.movie7} movieIndex={7} />
        <h2>8pm</h2>

        <Movie movieID={movieIDs.movie8} movieIndex={8} />
      </div>
    </div>
  );
}

export default ProgramTomorrow;
