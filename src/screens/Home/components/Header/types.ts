export interface IHomeHeader {
  onNavigateFavorites: () => void;
  setFilterRestaurants?: (value: string) => void;
  onFilter: () => void;
  filterRestaurants?: string;
}
