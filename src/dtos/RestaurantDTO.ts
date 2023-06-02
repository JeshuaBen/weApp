export interface RestaurantDTO {
  docs: Restaurant[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface Restaurant {
  subscriptions: {
    wefood: boolean;
  };
  paymentsInfo: {};
  addressInfo: {
    address?: string;
    city?: string;
    country?: string;
  };
  contacts: {
    email?: string;
    phoneNumber?: string;
  };
  location: {
    type: string;
    coordinates: number[];
  };
  image: {
    file: string;
    url?: string;
  };
  type: string;
  cuisines: Cuisine[];
  additionalInfo: [];
  _id: string;
  name: string;
  company: string;
  capacity: number;
  mealType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  currencyCode: string;
  languageCode: string;
  services: {};
  timezone: string;
  languageInfo: string;
  currencyInfo: CurrencyInfo;
  countryCode: string;
}

interface Cuisine {
  id: string;
  name: any;
  tag: string;
}

interface CurrencyInfo {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}
