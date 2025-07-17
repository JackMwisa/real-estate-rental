import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';
import { useNavigate } from 'react-router-dom';

export default function ApartmentCard({ apartment }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={apartment.image}
        alt={apartment.title}
        onClick={() => navigate(`/apartments/${apartment.id}`)}
        style={{ cursor: 'pointer' }}
      />
      <CardContent>
        <Typography variant="h6">{apartment.title}</Typography>
        <Typography variant="body2">{apartment.address}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(toggleFavorite(apartment.id))}>
          {favorites.includes(apartment.id) ? "Rimuovi" : "Salva"}
        </Button>
      </CardActions>
    </Card>
  );
}
