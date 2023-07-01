import { Header } from "./Components/Header";
import RecommendedVideos from "./Components/RecommendedVideos";
import Sidebar from "./Components/Sidebar";
import './App.css';



function App() {
  return (
    <div className="App">
     
     <Header/>
     
     <div className="app__home">


          <Sidebar/>
          <RecommendedVideos/>



     </div>
     
     
     
    </div>
  );
}

export default App;
