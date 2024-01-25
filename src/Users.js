import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { Box } from "@mui/material";
import Axios from "axios";
import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getUsers();
    },[]);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
        .then(response => {
            setUsers(response.data?.response || []);
        })
        .catch(error => {
            console.log("error : ", error);
        })
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id : data.id,
            name : data.name,
        }

        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false)
            })
            .catch(error => {
                console.log("error : ", error);
            })
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id : data.id,
            name : data.name,
        }

        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false)
            })
            .catch(error => {
                console.log("error : ", error);
            })
    }

    const deleteUser = (data) => {
        Axios.post('http://localhost:3001/api/deleteuser',data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.log("error : ", error);
            })

    }

    return(
            <Box>
                <UserForm
                    addUser={addUser}
                    updateUser={updateUser}
                    submitted={submitted}
                    data={selectedUser}
                    isEdit={isEdit}
                />
                <UserTable
                    rows={users}
                    selectedUser={data => {
                        setSelectedUser(data);
                        setIsEdit(true);
                    }}
                    deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
                />
            </Box>
    );

}

export default Users;