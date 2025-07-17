import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const favorites = useSelector(state => state.favorites);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">House Renting -</Typography>
        <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
          Appartamenti salvati: {favorites.length}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
