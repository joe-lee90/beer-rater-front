

import './BeerCard.css';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// ;
// import Stack from '@mui/material/Stack';


// function BeerCard({ beer }) {
//   return (
//     <div className="beer-card">
       
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//          <h3 className="beer-list">
//             {`${beer.name} `}
//         </h3>
//         <Typography sx={{ fontSize: 20 }}>
//           {`${beer.beer_type.replaceAll('-', ' ')} `}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {`${beer.location} `}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           {`ABV: ${beer.abv} `}
//         </Typography>
//         <Typography variant="body2">
//           {`Brewery: ${beer.brewery_name} `}
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Edit</Button>
//       <Stack spacing={2}>
//         <Rating name="half-rating" defaultValue={beer.average_rating} precision={0.5} /> Average Rating
//       </Stack>
//       </CardActions>
//     </Card>

  
//     </div>
//   );
// }

// export default BeerCard;




import Rating from '@mui/material/Rating'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

export default function BeerCard({ beer, user }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='beer-card' sx={{ maxWidth: 350 }}>
      <CardHeader
        title={beer.name}
        subheader={beer.beer_type.replaceAll('-', ' ')}
      />
      <CardContent>
        <Typography color="text.secondary">
          {/* Beer info here */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <EditIcon />
        </IconButton>
        <Rating name="half-rating" defaultValue={beer.average_rating} precision={0.5} />
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
        </CardContent>
      </Collapse>
    </Card>
  );
}
