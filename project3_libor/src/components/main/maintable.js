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
import FilterListIcon from '@material-ui/icons/FilterList';

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

function createRow(documentName, documentID, resultKey, resultValue, resultValueExtracted, igniteElementID, isModified, annotationID) {
    return { documentName, documentID, resultKey, resultValue, resultValueExtracted, igniteElementID, isModified, annotationID };
}

const rows = [
    createRow('file1.pdf', '1', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file2.pdf', '2', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file3.pdf', '3', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file4.pdf', '4', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file5.pdf', '5', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file6.pdf', '6', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file7.pdf', '7', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file8.pdf', '8', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file9.pdf', '9', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file10.pdf', '10', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file11.pdf', '11', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file12.pdf', '12', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file13.pdf', '13', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file14.pdf', '14', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file15.pdf', '15', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file16.pdf', '16', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file17.pdf', '17', 'Q1', 'A1', 'A1', '1', 'true', '1'),
    createRow('file18.pdf', '18', 'Q1', 'A1', 'A1', '1', 'true', '1'),

]

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const TableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
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
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
        </Toolbar>
    );
};
TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        backgroundColor: 'rgba(255,255, 255, 0.3)',
        textAlign: 'left',
        whiteSpace: 'wrap',
        overflow: 'auto',
    },
    table: {
        minWidth: 750,

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
}));

export default function MainTable() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (e) => {
        if (e.target.checked) {
            const newSelecteds = rows.map((n) => n.documentID);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }
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

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableHead>
                    <TableRow>
                        <TableCell padding='checkbox'>
                            <Checkbox onClick={handleSelectAllClick}/>
                        </TableCell>
                        {headCells.map((headCell) => (
                            <TableCell key={headCell.id}>
                                <TableSortLabel>{headCell.label}</TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableBody>
                            {rows.map((row, i) => {
                                const isItemSelected = isSelected(row.documentName);
                                const labelId = `enhanced-table-checkbox-${i}`;
                                return (
                                    <TableRow 
                                    hover
                                    onClick={(event) => handleClick(event, row.documentName)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.name}
                                    selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox"><Checkbox checked={isItemSelected} /></TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none">{row.documentName}</TableCell>
                                        <TableCell align="right">{row.documentID}</TableCell>
                                        <TableCell align="right">{row.resultKey}</TableCell>
                                        <TableCell align="right">{row.resultValue}</TableCell>
                                        <TableCell align="right">{row.resultValueExtracted}</TableCell>
                                        <TableCell align="right">{row.igniteElementID}</TableCell>
                                        <TableCell align="right">{row.isModified}</TableCell>
                                        <TableCell align="right">{row.annotationID}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}