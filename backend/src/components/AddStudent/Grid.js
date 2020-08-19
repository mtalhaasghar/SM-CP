import React, { Component } from 'react'
import { 
    GridComponent, 
    ColumnDirective, 
    ColumnsDirective, 
    Page, 
    Inject,
    Filter
 } from '@syncfusion/ej2-react-grids'
import data from './dataSource.json'
import './Grid.css'
export default class index extends Component {
    render() {
        return (
            <div style={{ margin: '1%', marginTop: '2%' }}>
                <GridComponent dataSource={data}  
                allowPaging={true}                
                pageSettings={{pageSize:6}}
                allowFiltering={true}
                >
                   
                    <ColumnsDirective>
                        <ColumnDirective field= 'Name' headerText='Student Name' textAlign='Left'/>                        
                        <ColumnDirective field= 'Registration' headerText='Registration No.' textAlign='Left'/>                        
                        <ColumnDirective field= 'Email' headerText='Email Adress' textAlign='Left'/>
                        <ColumnDirective field= 'Roll' headerText='Roll No.' textAlign='Left'/>                        
                        <ColumnDirective field= 'Phone' headerText='Phone No.' textAlign='Left'/>                        
                        <ColumnDirective field= 'Field of Sports' headerText='Field of Sports' textAlign='Left' />                                           
                        <ColumnDirective field= 'Category' headerText='Category' textAlign='Left' />
                    </ColumnsDirective>
                    <Inject services={[Page, Filter]}/>
                </GridComponent>
            </div>
        )
    }
}
