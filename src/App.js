import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';
import FooterTable from './components/downTable';


import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/ArrowDownward';
import KeyboardArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


 function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Checkbox
        // defaultUnchecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
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
  const [open, setOpen] = React.useState(false);
  const border = open ? {borderBottom: 0} : {borderBottom: 1};
  // const background = urlBg ? {backgroundImage: `url(${urlBg})`} : {backgroundColor: `${colorBg}`};
  
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
              <>
                <TableRow key={row.id}  className="sac" >
                    <TableCell style={border}>
                      {Checkboxes()}
                    </TableCell>
                    <TableCell component="th" scope="row" style={border}>
                      {row.id}
                      <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell style={border} align="left">{row.type}</TableCell>
                    <TableCell style={border} align="left">{row.ip}</TableCell>
                    <TableCell style={border} align="left">{row.platform}</TableCell>
                    <TableCell style={border} align="left">{row.vers}</TableCell>
                    <TableCell style={border} align="left">
                      <a href="/" >Detail <ArrowForwardIosIcon style={{ fontSize: 12 }} /></a>
                    </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}  colSpan={7}>
                    <Collapse in={open} timeout="auto" >
                        <Box margin={1}>
                            <Table className={classes.table} size="big" aria-label="a table two">
                              <FooterTable />
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
              </TableRow>
              </>
            ))}
           
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

