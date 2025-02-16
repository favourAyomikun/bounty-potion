import Leaderboardpage from "./pages/Leaderboardpage"
import { Routes, Route } from "react-router";

function App() {
  return (
      <Routes >
          <Route path='/*' element={<Leaderboardpage />} />
      </Routes>
  )
}

export default App
