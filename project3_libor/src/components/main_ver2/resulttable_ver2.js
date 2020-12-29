import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'documentName', numeric: false, label: 'documentName' },
    { id: 'documentID', numeric: false, label: 'documentID' },
    { id: 'resultKey', numeric: false, label: 'resultKey' },
    { id: 'resultValue', numeric: false, label: 'resultValue' },
    { id: 'resultValueExtracted', numeric: false, label: 'resultValueExtracted' },
    { id: 'igniteElementID', numeric: false, label: 'igniteElementID' },
    { id: 'disModified', numeric: false, label: 'isModified' },
    { id: 'annotationID', numeric: false, label: 'annotationID' },
];


function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className={classes.headRow}>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        backgroundColor: 'rgba(255,255, 255, 0.5)',
        textAlign: 'left',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    headRow: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.primary.main,
                backgroundColor: lighten(theme.palette.primary.light, 0.955),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

export default function ResultTable() {

    const [rows, setRow] = React.useState([
        {
            rowID: 0,
            documentName: 'file1.pdf',
            documentID: 1,
            resultKey: 'Q1',
            resultValue: 'A1',
            resultValueExtracted: 'A1',
            igniteElementID: 1,
            isModified: 'true',
            annotationID: 1,
        },
        {
            rowID: 1,
            documentName: 'file1.pdf',
            documentID: 1,
            resultKey: 'Q2',
            resultValue: 'A2',
            resultValueExtracted: 'A2',
            igniteElementID: 2,
            isModified: 'true',
            annotationID: 2,
        },
        {
            rowID: 2,
            documentName: 'file2.pdf',
            documentID: 2,
            resultKey: 'Q1',
            resultValue: 'A1',
            resultValueExtracted: 'A1',
            igniteElementID: 1,
            isModified: 'true',
            annotationID: 1,
        },
    ]);
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(16);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.rowID);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleDelete = () => {

        const selectedRows = selected.map((index) => {
            return rows[index];
        });
        // console.log(selectedRows);

        selectedRows.map(selectedRow => {
            return rows.splice(rows.filter(row => row === selectedRow),1);
        });

        const newRows = selectedRows.map(selectedRow => rows.splice(rows.filter(row => row !== selectedRow),1));

        setRow(newRows[0]);

    }

    const numSelected = selected.length;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Toolbar
                    className={clsx(classes.toolBarRoot, {
                        [classes.highlight]: numSelected > 0,
                    })}
                >
                    {numSelected > 0 ? (
                        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                            {numSelected} selected
                        </Typography>
                    ) : (
                            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                                table subtitle
                            </Typography>
                        )}

                    {numSelected > 0 ? (
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (
                            null
                        )}
                </Toolbar>
                <TableContainer>
                    <Table
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.rowID);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.rowID)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.rowID}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell align="center" >{row.documentName}</TableCell>
                                            <TableCell align="center">{row.documentID}</TableCell>
                                            <TableCell align="center">{row.resultKey}</TableCell>
                                            <TableCell align="center">{row.resultValue}</TableCell>
                                            <TableCell align="center">{row.resultValueExtracted}</TableCell>
                                            <TableCell align="center">{row.igniteElementID}</TableCell>
                                            <TableCell align="center">{row.isModified}</TableCell>
                                            <TableCell align="center">{row.annotationID}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[8, 16]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
}
