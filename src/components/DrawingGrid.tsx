import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { drawings } from '../data/mockData';
import { Tag } from 'antd';

const statusRenderer = (params: { value: string }) => {
  const color = params.value === 'Issued' ? 'green' : params.value === 'Draft' ? 'orange' : 'default';
  return <Tag color={color}>{params.value}</Tag>;
};

const columnDefs: ColDef[] = [
  { field: 'number', headerName: 'Drawing Number', width: 180, filter: true, sortable: true, pinned: 'left' },
  { field: 'title', headerName: 'Title', width: 280, filter: true, sortable: true },
  { field: 'type', headerName: 'Drawing Type', width: 150, filter: true, sortable: true },
  { field: 'revision', headerName: 'Rev', width: 80 },
  { field: 'status', headerName: 'Status', width: 120, filter: true, cellRenderer: statusRenderer },
];

export default function DrawingGrid() {
  return (
    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 180px)', width: '100%' }}>
      <AgGridReact
        rowData={drawings}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, editable: true }}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}
