import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'First name', width: 130 },
  { field: 'Year', headerName: 'Year', width: 130 },
  { field: 'Year', headerName: 'Poster', width: 130 },
  { field: 'Poster', headerName: 'Poster', width: 130 },
  
];

const rows = [
    {id: 1, "Title":"The Matrix Reloaded","Year":"2003","imdbID":"tt0234215","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
    {id: 2, "Title":"The Matrix Revolutions","Year":"2003","imdbID":"tt0242653","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    {id: 3, "Title":"The Matrix Revisited","Year":"2001","imdbID":"tt0295432","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg"},
    {id: 4, "Title":"Enter the Matrix","Year":"2003","imdbID":"tt0277828","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMjA4NTYwNjk0M15BMl5BanBnXkFtZTgwODk3MDMwMTE@._V1_SX300.jpg"},
    {id: 5, "Title":"The Matrix: Path of Neo","Year":"2005","imdbID":"tt0451118","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"},
    {id: 6, "Title":"Armitage III: Dual Matrix","Year":"2002","imdbID":"tt0303678","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg"}
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      <TableBody>
        {rows.map(n => (
            <TableRow key={n.id}>
                <TableHead>
                    <TableCell component="th" scope="column">Title</TableCell>
                    <TableCell component="th" scope="column">Year</TableCell>
                    <TableCell component="th" scope="column">Poster</TableCell>
                </TableHead>
                <TableCell>
                {n.Title}
                </TableCell>
                <TableCell>{n.Year}</TableCell>
                <TableCell><img src={n.Poster} /></TableCell>
            </TableRow>
            ))}
        </TableBody>
    </div>
  );
}
