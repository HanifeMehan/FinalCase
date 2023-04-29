import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/Home/Home";
import StarshipList from "./components/Starships/StarshipsList";
import StarshipsDetails from "./components/StarshipsDetails/StarshipsDetails";
import LoadingScreen from "./components/Loader/LoadingScreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = new QueryClient();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index path="/starship" element={<StarshipList />} />
              {/* <Route path="/starship/:id" element={<StarshipsDetails  />} /> */}
              <Route index path="/loading" element={<LoadingScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
