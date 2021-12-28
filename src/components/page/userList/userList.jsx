import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { rows } from "../../../DummyData";
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom"
import { useState } from 'react';



function UserList() {
  const [data, setdata] = useState(rows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));

  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListUserimg' src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 160 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (<>
          <Link to={"/users/" + params.row.id}>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='userListDel' onClick={() => handleDelete(params.row.id)} />
        </>
        )
      }
    },


  ];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;

