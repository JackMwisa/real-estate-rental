import { render, screen } from '@testing-library/react';
import ApartmentCard from '../components/ApartmentCard';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

test('renders apartment title', () => {
  const apartment = {
    id: 1,
    title: 'Test Apartment',
    address: 'Via Test 123',
    image: 'https://source.unsplash.com/random/1',
  };

  render(
    <Provider store={store}>
      <BrowserRouter>
        <ApartmentCard apartment={apartment} />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText('Test Apartment')).toBeInTheDocument();
});
