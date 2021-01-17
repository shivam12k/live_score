import { Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core'
import React, { Fragment, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Image from '../images/verses.png'
import { getMatchDetails } from '../api/api';

const MyCard = ({ match, key }) => {

    const [details, setdetails] = useState({})
    const [open, setopen] = useState(false)

    const handleClose = () => {
        setopen(false)
    }

    const handleOpen = () => {
        setopen(true)
    }

    const handleClick = (id) => {
        getMatchDetails(id).then(data => {
            console.log("match data", data)
            setdetails(data)
            handleOpen();
        }).catch(err => { console.error(err) })
    }

    const getdilogBox = () => {
        return (
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dilog-title">{"Match Details..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dilog-discription">
                        <Typography>{details.stat}</Typography>
                        <Typography>
                            Match
                        <span style={{ fontWeight: 'bolder' }}>
                                {details.matchStarted ? " started" : "still not started"}
                            </span>
                        </Typography>
                        <Typography>
                            Score
                        <span style={{ fontWeight: 'bolder' }}>
                                {details.score}
                            </span>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"></Button>
                </DialogActions>
            </Dialog>)
    }

    const getMatchCard = () => {
        return (
            <Card style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }} variant="outlined" square>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <Grid item sm={3}> <Typography> {match["team-1"]} </Typography> </Grid>
                        <Grid item sm={3}> <Typography>
                            <img style={{ width: 67 }} src={Image} />
                        </Typography> </Grid>
                        <Grid item sm={3}> <Typography>{match["team-2"]}</Typography> </Grid>
                    </Grid>
                    <Typography>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button size="small" variant="contained"
                            style={{ marginRight: 5 }}
                            color="primary"
                            onClick={() => handleClick(match.unique_id)}>Show Details
                        </Button>
                        <Button size="small" variant="outlined"
                            style={{ marginTop: 5 }}
                            color="primary">Start Time : {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    }

    return (
        <Fragment>
          {  getMatchCard()}
           { getdilogBox()}
        </Fragment>
    )
}

export default MyCard;