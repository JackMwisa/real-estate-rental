import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';

export default function ApartmentDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorited = favorites.includes(Number(id));

  useEffect(() => {
    axios.get('/apartments.json').then((res) => {
      const apt = res.data.find((apt) => apt.id.toString() === id);
      setApartment(apt);
    });
  }, [id]);

  if (!apartment) {
    return (
      <Box sx={{ mt: 10, px: 2 }}>
        <Typography variant="h6">Loading apartment details...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 10, px: 2 }}>
      <Typography variant="h4" gutterBottom>{apartment.title}</Typography>
      <img
        src={apartment.image}
        alt={apartment.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 8 }}
      />

      <Button
        variant={isFavorited ? 'outlined' : 'contained'}
        color="primary"
        onClick={() => dispatch(toggleFavorite(apartment.id))}
        sx={{ mt: 2 }}
      >
        {isFavorited ? 'Rimuovi dai preferiti' : 'Salva nei preferiti'}
      </Button>

      <Typography variant="subtitle1" mt={2}>
        {apartment.address}
      </Typography>

      <Typography mt={2}>
        <strong>Descrizione:</strong> Appartamento luminoso, in pieno centro, servito da tram a solo 15 minuti di distanza. In zona sono presenti esercizi commerciali e un minimarket.
      </Typography>
      <Typography mt={1}><strong>Numero di stanze:</strong> 2</Typography>
      <Typography><strong>Disponibilità:</strong> dal 1 al 15 del mese</Typography>
    </Box>
  );
}
