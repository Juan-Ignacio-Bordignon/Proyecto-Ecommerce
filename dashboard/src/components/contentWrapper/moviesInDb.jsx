import MovieDetail from "./movieDetail/movieDetail";
import ContentCard from "./contentCard/contentCard";

export function MoviesInDb() {
  return(
    <ContentCard title="Last movie in Data Base">
          <MovieDetail />
        </ContentCard>
  )
}