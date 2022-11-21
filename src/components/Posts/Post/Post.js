import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({ post }) => {
    const classes = useStyles();
    console.log(post);
    return(
        <Card className={classes.card}>
            <CardMedia className="classes.media" component='img' image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}` )}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbAltIcon fontSize="small" />Like
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post;