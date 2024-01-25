import {Button, Grid, Input, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";


const UserForm = ({addUser, updateUser, submitted, data, isEdit}) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id  && data.id !== 0 ){
            setId(data.id);
            setName(data.name)
        }
    },[data]);

    return(
        <Grid
            container
            spacing={2}
            sx={{
                    backgroundColor : '#ffffff',
                    marginBottom: '30px',
                    display: 'block',
                    marginLeft:'30px',
                }}
        
        >
            <Grid item xs = {12}>
                <Typography component={'h1'} sx={{color:'#000000',marginBottom:'10px',fontWeight: 'bold'}}>User Form</Typography>
            </Grid>
            <Grid>
                <Typography component={'label'} htmlFor="id" sx={{color:'#000000',marginRight:'20px',fontSize:'16px',width:'100px',display:'flex',}}>
                    ID
                </Typography>
                <Input 
                    type="number"
                    id = "id"
                    name = "id"
                    sx={{width:'400px'}}
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    />

                <Typography component={'label'} htmlFor="name" sx={{color:'#000000',marginRight:'20px',fontSize:'16px',width:'100px',display:'flex',}}>
                    Name
                </Typography>
                <Input 
                    type="text"
                    id = "name"
                    name = "name"
                    sx={{width:'400px'}}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
            </Grid>

            <Button sx={{
                color:'#000000',
                margin:'auto',
                marginBottom:'20px',
                backgroundColor:'#00c6e6',
                marginLeft:'15px',
                marginTop:'20px',
                '&:hover': {
                    opacity:'0.7',
                    backgroundColor:'#00c6e6',
                }
                }}
                onClick={() => isEdit ? updateUser({id, name}) : addUser({id , name})}    
                
                >
                    {
                        isEdit ? 'Update' : 'Add'
                    }

            </Button>

        </Grid>

    );

}

export default UserForm;