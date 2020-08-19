import React, { Component } from 'react'
import { 
    GridComponent, 
    ColumnDirective, 
    ColumnsDirective, 
    Page, 
    Inject,
    Edit,
    EditSettingsModel,
    Toolbar,
    ToolbarItems
 } from '@syncfusion/ej2-react-grids'
import data from './dataSource.json'
import './Grid.css'
export default class index extends Component {
    render() {
        const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting:true};
        const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
        return (
            <div style={{ margin: '1%', marginTop: '2%' }}>
                <GridComponent dataSource={data}  
                allowPaging={true}                
                pageSettings={{pageSize:6}}
                editSettings = {editOptions}
                toolbar= {toolbarOptions}
                >
                   
                    <ColumnsDirective>
                        <ColumnDirective field= 'Name' headerText='Event Name' textAlign='Left' width='100'/>                        
                        <ColumnDirective field= 'Date' headerText='Date' textAlign='Left' width='80' editType='datepickeredit'/>                        
                        <ColumnDirective field= 'Day' headerText='Day' textAlign='Left' width='65'/>                        
                        <ColumnDirective field= 'Time' headerText='Time' textAlign='Left' width='100'/>                        
                        <ColumnDirective field= 'Field of Sports' headerText='Field of Sports' textAlign='Left' width='100'/>                        
                        <ColumnDirective field= 'Match' headerText='Match No.' textAlign='Left' width='50' editType= 'numericedit' />                        
                        <ColumnDirective field= 'Team1' headerText='Team 1' textAlign='Left' width='100'/>                        
                        <ColumnDirective field= 'Team2' headerText='Team 2' textAlign='Left' width='100'/>
                    </ColumnsDirective>
                    <Inject services={[Page, Edit, Toolbar]}/>
                </GridComponent>
            </div>
        )
    }
}
