import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';
import FooterTable from './components/downTable';
import ItemDownTable from './components/itemsDownTable';




import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';


 function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
      <Checkbox
        // defaultUnchecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
  );
}
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(id, type, ip, platform, vers) {
  return { id, type, ip, platform, vers };
}

const rows = [
  createData('id134543', 'EC2Instance', '172.168.15.220', 'Linux Ubuntu', '24.00'),
  createData('id222212', 'EC2Instance', '172.168.15.220', 'Linux Ubuntu', '24.00'),
  // createData('id134543', 'EC2Instance', '172.168.15.220', 'Linux Ubuntu', '24.00'),
];
export default function DenseTable(props) {
  const classes = useStyles();
 
  return (
    <>
      <TableContainer >
        <Table className={classes.table} size="big" aria-label="a table">
          <TableHead>
            <TableRow>
              <TableCell>{Checkboxes()}</TableCell>
              <TableCell>Instance id</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">IP</TableCell>
              <TableCell align="left">Platform</TableCell>
              <TableCell align="left">Version</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <ItemDownTable
                  key={row.id}
                  id={row.id}
                  ip={row.ip}
                  type={row.type}
                  platform={row.platform}
                  vers={row.vers}
                />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

