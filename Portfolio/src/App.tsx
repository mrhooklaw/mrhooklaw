import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import InteractiveGrid from "./components/InteractiveGrid";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Frameworks from "./pages/Frameworks";

// Placeholder components for missing pages
const Projects = () => (
  <div className="flex items-center justify-center h-full text-gray-400 font-mono">
    ~/projects: No projects found (yet).
  </div>
);

const SourceCode = () => (
  <div className="flex items-center justify-center h-full text-gray-400 font-mono">
    ~/source-code: Access denied (just kidding, coming soon).
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="h-screen overflow-hidden text-foreground bg-background font-mono">
      <InteractiveGrid />
      <div className="relative z-10 grid grid-rows-[auto_1fr_auto] max-w-[1100px] mx-auto h-full p-6 pointer-events-none">
        <header className="pointer-events-auto">
          <Header />
        </header>
        <main className="overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/source-code" element={<SourceCode />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
