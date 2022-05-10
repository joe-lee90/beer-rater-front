
import './BeerCard.css';
import Rating from '@mui/material/Rating'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BeerCard({ beer, currentUser, handleRemove }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const postNewRating = (currentUserId, rating) => {
  console.log(currentUserId, rating, beer.id)
  fetch(`http://localhost:9292/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      // need to look at backend
      rating_value: rating,
      beer_id: beer.id,
      user_id: currentUserId
    })
  }) // Rating.create(user_id: currentUserId, beer_id: beer.id, rating: rating)
}

const handleRatingClick = (e) => {
  currentUser ? postNewRating(currentUser, e.target.value) : alert("Please Select a User!")
}

  return (
    <Card className='beer-card' sx={{ maxWidth: 350 }}>
      <CardHeader
      onClick={()=> navigate(`beers/${beer.id}`)}
        title={beer.name}
        subheader={beer.beer_type.replaceAll('-', ' ')}
      />
      <CardContent>
        <Typography color="text.secondary">
          {/* Beer info here */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => handleRemove(beer.id)}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <EditIcon />
        </IconButton>
        <Rating name="half-rating" className='avg-rating' defaultValue={beer.average_rating} precision={0.5} readOnly/>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* {put user rating here} */}
          <p>{`Brewery: ${beer.brewery_name} `}</p>
          <p>{`${beer.location} `}</p>
          <p>{`ABV: ${beer.abv} `}</p>
          <h4>Your rating:</h4>
          <Rating name="half-rating" defaultValue="0" precision={0.5} onClick={handleRatingClick}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}
