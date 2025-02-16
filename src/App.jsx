import LeaderboardDashboard from "./pages/LeaderboardDashboard";
import Leaderboardpage from "./pages/Leaderboardpage"
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ fontFamily: "Sora" }}>
      <Routes >
        <Route path='/*' element={<Leaderboardpage />} />
        <Route path='/leader-dashboard' element={<LeaderboardDashboard />} />
      </Routes>
    </div>
  )
}

export default App
