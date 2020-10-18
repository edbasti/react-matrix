import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  media: {
    height: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function Matrix({ item, i }) {
    const classes = useStyles();
    return (
        <Fragment key={ i }>
            <Card key={ i }>
                <CardMedia
                    className={classes.media}
                    image={ item.Poster }
                    title="poster"
                />
                <CardContent className={ classes.root }>
                    <Typography variant="h4" component="h2">
                        { item.Title } ({ item.Year })
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      imdbID: { item.imdbID }
                    </Typography>
                    <Typography variant="body2" component="p">
                        Genre: { item.Type }
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}

  export default Matrix;