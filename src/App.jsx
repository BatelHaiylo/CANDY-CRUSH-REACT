import Home from "./components/pages/Home.component";
import ScoreProvider from "./components/context/ScoreProvider.component";
export default function App() {
  return ( 
      <ScoreProvider>
        <Home/>
      </ScoreProvider>
   );
}