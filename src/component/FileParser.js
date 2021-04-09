import React from 'react';
import { CSVReader } from 'react-papaparse';

function FileParser(props) {

  const handleOnDrop = (dat) => {
        console.log('DATA my', dat );
      const arrDataFromDropFile = dat.map(i => i.data); 
        console.log('arrDataFromDropFile', arrDataFromDropFile);
      props.setArr(arrDataFromDropFile); 
  }

    const handleOnError = (err, file, inputElem, reason) => {
      console.log(err)
    }
  
    const handleOnRemoveFile = (data) => {
      console.log('---------------------------')
      console.log(data)
      console.log('---------------------------')
    }
  return (
      <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          removeButtonColor='#659cef'
          config={{header: true}}
          onRemoveFile={handleOnRemoveFile}
          style={{
              dropArea: {
              borderColor: 'green',
              color: 'green',
              borderRadius: '0.2em',
              margin: '1em',
              },
              dropAreaActive: {
              borderColor: 'red',
              },
              dropFile: {
              width: 200,
              height: 70,
              background: '#ccc',
              borderRadius: '0.2em',
              },
              fileSizeInfo: {
              color: 'green',
              lineHeight: 1,
              margin: '0.6em',
              },
              fileNameInfo: {
              color: 'green',
              fontSize: 14,
              margin: '0.6em'
              },
              progressBar: {
              backgroundColor: 'green',
              marginBottom: '0.9em'
              },
          }}   
      >
          <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
  )
};

export default FileParser;