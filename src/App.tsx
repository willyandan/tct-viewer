import { useState } from 'react';
import './App.css';
import { Cards } from './Cards';
import Dropzone from './Dropzone';


function App() {
  const [blocks, setBlocks] = useState<any[]>([])
  const handleOpenFile = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const text = (event.currentTarget as FileReader).result as string
      const result = text.split('\n')
        .filter(r => r.length > 0)
        .map(res => atob(res))
        .map(res => decodeURI(res))
        .map(res => JSON.parse(res))
      setBlocks(result)
      console.log(result);



    });
    reader.readAsText(file);
  }
  return (
    <div className="App">
      <div className="dropzone" >
        <Dropzone open={(file) => { handleOpenFile(file) }} />

      </div>
      <Cards blocks={blocks} />
    </div>
  );
}

export default App;
