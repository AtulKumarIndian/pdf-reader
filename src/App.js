import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';

import React, {useState} from 'react';

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function nextPage(){
    
    setPageNumber(pageNumber+1);
  }
  function prevPage(){
    if(pageNumber > 1)
    setPageNumber(pageNumber-1);
  }

  return (
    <div className='app'>
      <center>
      <Document file="reactjs.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={prevPage}>prev</button>
      <button onClick={nextPage}>next</button>
     
      </center>
      
    </div>
  );
}

export default App;
