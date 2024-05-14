import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Mehriddin', firstName: 'Barnoyev', age: 35 },
  { id: 2, lastName: 'Ramziddin', firstName: 'Barnoyev', age: 42 },
  { id: 3, lastName: 'Asliddin', firstName: 'Nuriddinov', age: 45 },
  { id: 4, lastName: 'Jaloliddin', firstName: 'Barnoyev', age: 16 },
  { id: 5, lastName: 'Nurmuhammad', firstName: 'Mahmudov', age: null },
  { id: 6, lastName: 'Botir', firstName: "Turdimurodov", age: 20 },
  { id: 7, lastName: 'Abdurahmon', firstName: 'Abduraxmonov', age: 19 },
  { id: 8, lastName: 'Javohir', firstName: 'Jaxonov', age: 20 },
  { id: 9, lastName: 'Jaxongir', firstName: 'Asrayev', age: 21 },
  { id: 10, lastName: 'Muhammadjon', firstName: 'Usomonov', age: 21 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }} className='bg-'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
