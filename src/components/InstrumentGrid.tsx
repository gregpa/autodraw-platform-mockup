import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { instruments } from '../data/mockData';
import { Tag } from 'antd';

const statusRenderer = (params: { value: string }) => {
  const color = params.value === 'Complete' ? 'green' : params.value === 'In Progress' ? 'orange' : 'default';
  return <Tag color={color}>{params.value}</Tag>;
};

const columnDefs: ColDef[] = [
  { field: 'tag', headerName: 'Tag Number', width: 120, filter: true, sortable: true, pinned: 'left' },
  { field: 'type', headerName: 'Instrument Type', width: 180, filter: true, sortable: true },
  { field: 'service', headerName: 'Service Description', width: 220, filter: true, sortable: true },
  { field: 'pid', headerName: 'P&ID', width: 100, filter: true, sortable: true },
  { field: 'rangeMin', headerName: 'Range Min', width: 100, type: 'numericColumn' },
  { field: 'rangeMax', headerName: 'Range Max', width: 100, type: 'numericColumn' },
  { field: 'units', headerName: 'Units', width: 100 },
  { field: 'manufacturer', headerName: 'Manufacturer', width: 130, filter: true },
  { field: 'model', headerName: 'Model', width: 100 },
  { field: 'jb', headerName: 'Junction Box', width: 120, filter: true },
  { field: 'status', headerName: 'Status', width: 120, filter: true, cellRenderer: statusRenderer },
];

export default function InstrumentGrid() {
  return (
    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 180px)', width: '100%' }}>
      <AgGridReact
        rowData={instruments}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, editable: true }}
        rowSelection="multiple"
        animateRows={true}
        enableCellTextSelection={true}
      />
    </div>
  );
}
