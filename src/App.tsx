import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { PortfolioAssistant } from "./components/assistant/PortfolioAssistant";

const ProjectPage = lazy(() =>
  import("./pages/ProjectPage").then((m) => ({ default: m.ProjectPage })),
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work/:slug"
          element={
            <Suspense fallback={null}>
              <ProjectPage />
            </Suspense>
          }
        />
      </Routes>
      <PortfolioAssistant />
    </Layout>
  );
}

export default App;
