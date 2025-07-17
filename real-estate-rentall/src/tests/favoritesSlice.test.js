import favoritesReducer, { toggleFavorite } from '../redux/favoritesSlice';

test('should add and remove favorites correctly', () => {
  let state = [];
  state = favoritesReducer(state, toggleFavorite(1));
  expect(state).toEqual([1]);
  state = favoritesReducer(state, toggleFavorite(1));
  expect(state).toEqual([]);
});
