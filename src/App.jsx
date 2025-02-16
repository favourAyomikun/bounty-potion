import Leaderboardpage from "./pages/Leaderboardpage"
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ fontFamily: "Sora" }}>
      <Routes >
        <Route path='/*' element={<Leaderboardpage />} />
      </Routes>
    </div>
  )
}

export default App
