import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ApartmentCard from '../components/ApartmentCard';

export default function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get('/apartments.json').then(response => setApartments(response.data));
  }, []);

  return (
    <Grid
      container
      spacing={3}               
      sx={{ padding: 3, marginTop: 10 }}      
    >
      {apartments.map(apartment => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={apartment.id}
          sx={{ padding: 1 }}   
        >
          <ApartmentCard apartment={apartment} />
        </Grid>
      ))}
    </Grid>
  );
}
