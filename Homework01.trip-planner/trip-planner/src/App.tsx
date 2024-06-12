import Greetings from "./components/greetings"
import Trips from "./components/trips"
import {AboutMe} from "./components/aboutMe"

const fullName = "Ivan Arsov";
const from = "Macedonia";
const favouriteMovies = ["Forgotten", "Watcher", "Paradise City"]
function App() {

  return (
    <div>
      <Greetings /> 
      <br />
      <Trips />
      <br />
      <AboutMe fullName={fullName} from={from} favoriteMovies={favouriteMovies} />
      <br />
    </div>
  )
}

export default App 