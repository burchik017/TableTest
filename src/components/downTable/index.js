import f from './style.module.css';

import ItemDownTable from '../downTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const FooterTable = () => {
    return (
        <div className={f.cont}>
            <div className={f.left}>
                <p>Memory <span>55%</span></p>
                <p>Disk <span>25%</span></p>
                <p>CPU <span>5%</span></p>
            </div> 
            <div className={f.right}>
                <p>Services <a href="/">View ALL</a></p>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Start/Stop</TableCell>
                            <TableCell>Created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Docker</TableCell>
                            <TableCell>kjd983ywqz</TableCell>
                            <TableCell>Hello1</TableCell>
                            <TableCell>Runnig</TableCell>
                            <TableCell><span>stop</span></TableCell>
                            <TableCell>3d ago</TableCell>
                        </TableRow>
                    </TableBody>
            </div>
        </div>
    );
}
export default FooterTable;