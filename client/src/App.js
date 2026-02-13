import React from 'react';
import { Container, AppBar, Typography, Stack } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { Grow, Grid } from '@mui/material';
import memories from './images/memories.jpg';
import useStyles from './styles';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar
                position="static"
                color="inherit"
                sx={{
                    borderRadius: 15,
                    margin: '30px 0',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: '100%' }}
                >
                    <img src={memories} alt="memories" height="60" width="60" />
                    <Typography variant="h2" align="center">
                        Memories
                    </Typography>
                </Stack>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid Container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                                </Grid>
                                </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
