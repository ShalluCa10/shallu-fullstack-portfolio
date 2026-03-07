//import required modules
import express from "express";
import path from "path";
import "dotenv/config";

import trakt from "./components/trakt/api.js";

const __dirname = import.meta.dirname;

//set up Express app
const app = express();
const port = process.env.PORT || 8888 ;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let movieList = await trakt.getTrendingMovies();
  //console.log(movieList);
  response.render("index", { movies: movieList });
});
app.get("/movie/:imdbId/details", async (request, response) => {
  //request.params.<placeholder_name>
  //imdbId = request.params.imdbId
  let studioList = await trakt.getStudiosByMovieId(request.params.imdbId);
  //console.log(studioList);
  let trailerList = await trakt.getTrailersByMovieId(request.params.imdbId);
  response.render("studios", { studios: studioList, trailers: trailerList });
});

app.get("/trending", async (request, response) => {
  let showList = await trakt.getTrendingShows();
  response.render("trending", { shows: showList });
});


app.get("/show/:showId", async (request, response) => {
  let showDetails = await trakt.getShowDetails(request.params.showId);
  response.render("show", { show: showDetails });
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


