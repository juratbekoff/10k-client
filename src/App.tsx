import { Routes, Route } from "react-router-dom";
import { NotFound, PostView } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/s/:streamId/p/:postId" element={<PostView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

// http://localhost:5174/s/11/p/6
