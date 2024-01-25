import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({rows, selectedUser, deleteUser}) => {

    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableHead>
                <TableBody>
                    {
                        rows.map(rows => (
                            <TableRow key={rows.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                                <TableCell component={'th'} scope="row">{rows.id}</TableCell>
                                <TableCell component={'th'} scope="row">{rows.name}</TableCell>
                                <TableCell>
                                    <Button 
                                        sx={{margin : '0px 10px'}} 
                                        onClick={() => {selectedUser({id: rows.id, name: rows.name})}}>
                                        Update
                                    </Button>
                                    <Button 
                                        sx={{margin : '0px 10px'}} 
                                        onClick={() => deleteUser({id : rows.id})}
                                        
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </TableContainer>
    );

}

export default UserTable;