import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getPeople} from '../redux/reducer/counterSlice';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const LoginComponent = () => {
    const [login, setLogin] = useState({login: '', password: ''})
    const [error, setError] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    const handleChange = (filed) => {
        return (event) => {
            const {value} = event.target
            const state = {...login, [filed]: value}
            setLogin(state)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        if (login.login === '') {
            alert('Введите логин');
        } else if (login.password === '') {
            alert('Введите пароль')
        } else {
            fetchUsers()
        }
    }

    const fetchUsers = () => {
        axios.get(`https://randomuser.me/api/`)
            .then(responses => {
                const person = responses.data;
                dispatch(getPeople(person))
                setError('')
                history.push('/user')
            }).catch((e) => {
            setError('Request error')
            alert(error)
        })
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box component='form' onSubmit={handleClick} noValidate sx={{mt: 1}}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='login'
                        name='login'
                        value={login.login}
                        autoFocus
                        onChange={handleChange('login')}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        type='password'
                        id='password'
                        value={login.password}
                        onChange={handleChange('password')}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};