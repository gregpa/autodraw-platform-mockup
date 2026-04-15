import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ioSignals } from '../data/mockData';
import { Tag } from 'antd';

const typeRenderer = (params: { value: string }) => {
  const colorMap: Record<string, string> = { AI: 'blue', AO: 'purple', DI: 'green', DO: 'orange' };
  return <Tag color={colorMap[params.value] || 'default'}>{params.value}</Tag>;
};

const columnDefs: ColDef[] = [
  { field: 'tag', headerName: 'Tag Number', width: 120, filter: true, sortable: true, pinned: 'left' },
  { field: 'signalType', headerName: 'Signal Type', width: 120, filter: true, cellRenderer: typeRenderer },
  { field: 'plc', headerName: 'PLC', width: 100, filter: true },
  { field: 'rack', headerName: 'Rack', width: 80, type: 'numericColumn' },
  { field: 'slot', headerName: 'Slot', width: 80, type: 'numericColumn' },
  { field: 'point', headerName: 'Point', width: 80, type: 'numericColumn' },
  { field: 'cable', headerName: 'Cable', width: 110, filter: true },
  { field: 'tb', headerName: 'Terminal Block', width: 130 },
  { field: 'wire', headerName: 'Wire Number', width: 130 },
];

export default function IOSignalGrid() {
  return (
    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 180px)', width: '100%' }}>
      <AgGridReact
        rowData={ioSignals}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, editable: true }}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}
