
export default (arr) => {
    const dataForTable = arr;
    const dataFieldsOfColumns = Object.keys(dataForTable[1]); //масив назв полів
    console.log('dataFieldsOfColumns', dataFieldsOfColumns);

    const columns = dataFieldsOfColumns.map( i => { 
        function Obj(dataField, text) {
            this.dataField = dataField;
            this.text = text;
        }; 
        console.log('III', i);
        return new Obj(i, i);
        }
    );
    return columns;
};

