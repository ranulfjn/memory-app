import React from 'react'
import memories from './assets/memories.png'
import { Container , AppBar , Grid , Typography ,Grow} from '@material-ui/core'

import useStyles from './styles'

import { Form , Posts} from './components'

const App = () => {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth ="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography  className={classes.heading} varient="h2" align ="center">Memories</Typography>
                <img   className={classes.image} src={memories} alt='memories' height='60'></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alighItems='stretch' spacing={4} >
                        <Grid item xs ={12} sm={7} >
                            <Posts />
                        </Grid>
                        <Grid item xs ={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>

        </Container>
            
        </>
    )
}

export default App;
