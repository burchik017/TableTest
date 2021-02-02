import React from 'react';
import ReactDOM from 'react-dom';
import FooterTable from '../downTable';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/ArrowDownward';
import KeyboardArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';


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



const ItemDownTable = (props) => {
    const [open, setOpen] = React.useState(false);
    const border = open ? {borderBottom: 0} : {borderBottom: 1};
    const iconChangeOpen = open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
    return (
        <>
            <TableRow key={props['id']}>
                <TableCell style={border}>
                    {Checkboxes()}
                </TableCell>
                <TableCell component="th" scope="row" style={border}>
                    {props['id']}
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {iconChangeOpen}
                    </IconButton>
                </TableCell>
                <TableCell style={border} align="left">{props['type']}</TableCell>
                <TableCell style={border} align="left">{props['ip']}</TableCell>
                <TableCell style={border} align="left">{props['platform']}</TableCell>
                <TableCell style={border} align="left">{props['vers']}</TableCell>
                <TableCell style={border} align="left">
                    <a href="/" >Detail <ArrowForwardIosIcon style={{ fontSize: 12 }} /></a>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}  colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="big" aria-label="a table two">
                                <FooterTable />
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
export default ItemDownTable;