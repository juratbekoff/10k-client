import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  NotFound,
  SinglePostPage,
  SinglePostByStreamPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/posts/:postId" element={<SinglePostPage />} />
      <Route
        path="/s/:streamId/p/:postId"
        element={<SinglePostByStreamPage />}
      />

      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
