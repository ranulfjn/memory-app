import React from 'react'
import memories from './assets/memories.png'
import { Container , AppBar , Grid , Typography ,Grow} from '@material-ui/core'

import { Form , Posts} from './components'

const App = () => {
    return (
        <>
        <Container maxWidth ="lg">
            <AppBar position="static" color="inherit">
                <Typography varient="h2" align ="center">Memories</Typography>
                <img src={memories} alt='memories' height='60'></img>
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
