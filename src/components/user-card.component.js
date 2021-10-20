import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../css/general.css';

export const UserCardComponent = () => {
    const user = useSelector((state) => state.users.user)
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    };

    return (
        <div>
            <Button className='btnCard' variant='contained' size='medium' onClick={handleClick}>Back</Button>
            <div className='card'><Card sx={{maxWidth: 189}}>
                <CardMedia
                    component='img'
                    height='160'
                    image={user.image}
                    alt='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {user.title} {user.first} {user.last}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
};
