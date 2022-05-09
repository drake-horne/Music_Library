import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MusicTable from './Components/MusicTable/MusicTable';
function App() {
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])
  
  async function getAllSongs(){
    try{
      let allSongs = await axios.get('http://127.0.0.1:8000/api/music/')
      setsongs(allSongs.data)
    }
    catch(ex) {
      console.log('error in get request api call.')
    }
  }

  return (
    <div >
      
      <button onClick={getAllSongs}>Get songs</button>
      <MusicTable parentSongs={songs}/>

    </div>
  );
}

export default App;
