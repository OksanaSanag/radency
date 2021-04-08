import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function Table(props) { console.log(props, 'MYprops')
    const {arr} = props; console.log(arr[0], 'MYarr')

    const columns = [
        {dataField:'Full Name', text:'Full Name'},
        {dataField:'Phone', text:'Phone'},
        {dataField:'Email', text:'Email'},
        {dataField:'Age', text:'Age'},
        {dataField:'Experience', text:'Experience'},
        {dataField:'Yearly Income', text:'Yearly Income'},
        {dataField:'Has children', text:'Has children'},
        {dataField:'License states', text:'License states'},
        {dataField:'Expiration date', text:'Expiration date'},
        {dataField:'License number', text:'License number'},
    ]

    return (
        <BootstrapTable 
            keyField='email' 
            data={ arr } 
            columns={ columns }
            striped
            hover
        />
    )
};

export default Table;