import './App.css';
 
import SideBar from './components/SideBar'; 
import MainContent from './components/MainContent';
 
function App() {
  return( 
   <div className='main'>
 
     <SideBar />
    
     <MainContent />
  
   </div>
  );
}

export default App;
