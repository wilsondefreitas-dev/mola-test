import React from 'react';
import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CustomDataGrid = styled(DataGrid)`

  border-radius: 32px !important;

`;

const CustonVisibilityIcon = styled(VisibilityIcon)`

  cursor: pointer;

`;

const Table = () => <CustomDataGrid
    columns={[{ field: 'col1', headerName: 'Nome', flex: 1 },
    { field: 'col2', headerName: 'Detalhes', width: 100, renderCell: () => <CustonVisibilityIcon />, sortable: false }]}
    rows={[{ id: 1, col1: 'Nome do Pokemon' },
    { id: 2, col1: 'Nome do Pokemon' },
    { id: 3, col1: 'Nome do Pokemon' },
    { id: 4, col1: 'Nome do Pokemon' },
    { id: 5, col1: 'Nome do Pokemon' },]}
    pageSize={10}
    rowsPerPageOptions={[10]}
    disableColumnFilter
    disableColumnSelector
    disableColumnMenu
/>

export default Table;