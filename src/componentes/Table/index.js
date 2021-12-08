import React, { useCallback, useEffect, useReducer, useState, useRef } from 'react';
import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Axios from 'axios';

const CustomDataGrid = styled(DataGrid)`

  border-radius: 32px !important;

`;

const CustonVisibilityIcon = styled(VisibilityIcon)`

  cursor: pointer;

`;

const CustonLink = styled(Link)`

  display: flex;
  color: #333333;
  justify-content: center;

  :hover {

    color: #db2e65;

  }

`;

const dataReducer = (state, action) => {

  switch (action.type) {

    case 'SET_DATA':
      return { ...state, results: action.payload, count: action.count, loading: false };

    case 'SET_CURRENT_OFFSET':
      return { ...state, currentOffset: action.currentOffset };

    case 'LOADING_DATA':
      return { ...state, loading: true };

    default:
      return state;

  }

};

const columns = [

  { field: 'number', headerName: '#', width: 10, sortable: false },
  { field: 'col1', headerName: 'Nome', flex: 1, sortable: false },
  {
    field: 'col2', headerName: 'Detalhes', width: 100, sortable: false, renderCell: (params) => <CustonLink to={`details?id=${params.row.number}`}><CustonVisibilityIcon /></CustonLink>
  },

];

const Table = () => {

  const pageSize = useRef(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, dispatchData] = useReducer(dataReducer, { results: [], count: 0, loading: true, currentOffset: 0 });

  const fetchData = useCallback(async () => {

    await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize.current}&offset=${data.currentOffset}`).then(response => {

      dispatchData({ type: 'SET_DATA', payload: response.data.results, count: response.data.count });

    });

  }, [pageSize, data.currentOffset]);

  useEffect(() => {

    dispatchData({ type: 'LOADING_DATA' });
    fetchData();

  }, [fetchData, currentPage]);

  const handleOnPageChange = (curPageNum) => {

    let offset;
    const goingBack = curPageNum < currentPage;
    const goingForward = curPageNum > currentPage;

    if (goingForward) {

      offset = data.currentOffset + pageSize.current;

    } else if (goingBack) {

      offset = data.currentOffset - pageSize.current;

    }

    dispatchData({ type: 'SET_CURRENT_OFFSET', currentOffset: offset });
    setCurrentPage(curPageNum);

  };

  return (

    <CustomDataGrid
      columns={columns}
      rows={

        data.results.map((item, index) => {

          return {
            id: index,
            number: data.currentOffset + (index + 1),
            url: item.url,
            col1: (item.name[0].toUpperCase() + item.name.slice(1)),
          }

        })}

      pageSize={pageSize.current}
      rowCount={data.count}
      onPageChange={handleOnPageChange}
      loading={data.loading}
      paginationMode="server"
      disableColumnFilter
      disableColumnSelector
      disableColumnMenu
      pagination
    />

  );

}

export default Table;