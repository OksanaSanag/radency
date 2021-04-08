import React, {useRef} from 'react';
import { CSVReader } from 'react-papaparse';

function FileInput() {

    const inputfile = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        //show Table
        console.log(getData());
    };

    function getData() {

    }

    return (
        <div>
            <form className="p-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="file" className="form-control-file" id="finput" ref={inputfile} />
                    <button type="submit" className="btn btn-light mt-2">Показать в таблице</button>
                </div>
            </form>
        </div>

    )
};

export default FileInput; 