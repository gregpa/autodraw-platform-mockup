import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { cables } from '../data/mockData';

const columnDefs: ColDef[] = [
  { field: 'number', headerName: 'Cable Number', width: 130, filter: true, sortable: true, pinned: 'left' },
  { field: 'type', headerName: 'Cable Type', width: 160, filter: true, sortable: true },
  { field: 'from', headerName: 'From', width: 130, filter: true },
  { field: 'to', headerName: 'To', width: 130, filter: true },
  { field: 'length', headerName: 'Length (ft)', width: 110, type: 'numericColumn' },
  { field: 'conduit', headerName: 'Conduit', width: 120, filter: true },
];

export default function CableGrid() {
  return (
    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 180px)', width: '100%' }}>
      <AgGridReact
        rowData={cables}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, editable: true }}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}
