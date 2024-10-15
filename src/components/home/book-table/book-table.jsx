import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '200px'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const GenreCell = styled(StyledTableCell)({
    width: '15%',
});

const TitleCell = styled(StyledTableCell)({
    width: '40%',
});

const AuthorCell = styled(StyledTableCell)({
    width: '25%',
});

const ChapterCell = styled(StyledTableCell)({
    width: '10%',
});

const TimeCell = styled(StyledTableCell)({
    width: '10%',
});

const BookTable = ({ data }) => {

    return (
        <TableContainer component={Paper} style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <Table sx={{ minWidth: 700, tableLayout: 'auto' }} aria-label="customized table">
                <TableBody>
                    {Array.isArray(data) && data.map((row, index) => (
                        <StyledTableRow key={`${row.title}-${index}`}>
                            <GenreCell component="th" scope="row">
                                {row.genre}
                            </GenreCell>
                            <TitleCell align="left">{row.title}</TitleCell>
                            <AuthorCell align="left">{row.author}</AuthorCell>
                            <ChapterCell align="left">{row.lastestChapter}</ChapterCell>
                            <TimeCell align="left">{row.time}</TimeCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BookTable