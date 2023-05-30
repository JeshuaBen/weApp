export interface IHomeHeader {
  onNavigateFavorites: () => void;
  onFilterRestaurants?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterRestaurants?: string;
}
