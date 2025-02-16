import LeaderboardDashboard from "./pages/LeaderboardDashboard";
import Leaderboardpage from "./pages/Leaderboardpage"
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ fontFamily: "Sora" }}>
      <Routes >
        <Route path='/*' element={<Leaderboardpage />} />
        <Route path='/leaderboard-dashboard' element={<LeaderboardDashboard />} />
      </Routes>
    </div>
  )
}

export default App
