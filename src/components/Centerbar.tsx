import { useState, useEffect } from "react";
import { MoreVert } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {
  Avatar, Box, Card, CardActions, CardContent, CardHeader,
  CardMedia, IconButton, Typography, Skeleton
} from "@mui/material";

function Centerbar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3 * 1000); // Delay of 3 seconds (converted to milliseconds)
    return () => clearTimeout(timer);
  }, []);


  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Skeleton variant="rectangular" height={500} animation={"wave"} />
      ) : (
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}

export default Centerbar;