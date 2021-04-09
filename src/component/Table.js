import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import doColumns from  '../assets/doColumns';

function Table(props) { console.log('MYprops', props);
    const {dataForTable} = props; console.log('MYarr', dataForTable);

    if (dataForTable.length === 0) return ( <div> Empty table </div>) 
         
    const columns = doColumns(dataForTable); 
        
    console.log('dataForTable', dataForTable); 
    console.log('columns', columns); 
    console.log('doColumns(dataForTable)', doColumns(dataForTable)); 
    return (
        <>
        <div> shopopalo </div>
        <BootstrapTable 
            keyField='email' 
            data={ dataForTable } 
            columns={ columns }
            striped
            hover 
        />
        </>
    )
       
};

export default Table;

    // const columns = [
    //     {dataField:'Full Name', text:'Full Name'},
    //     {dataField:'Phone', text:'Phone'},
    //     {dataField:'Email', text:'Email'},
    //     {dataField:'Age', text:'Age'},
    //     {dataField:'Experience', text:'Experience'},
    //     {dataField:'Yearly Income', text:'Yearly Income'},
    //     {dataField:'Has children', text:'Has children'},
    //     {dataField:'License states', text:'License states'},
    //     {dataField:'Expiration date', text:'Expiration date'},
    //     {dataField:'License number', text:'License number'},
    // ]