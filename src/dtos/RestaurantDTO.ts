export interface RestaurantDTO {
  docs: {
    subscriptions: {
      wefood: boolean;
    };
    paymentsInfo: {};
    addressInfo: {
      adress: string;
      city: string;
      country: string;
    };
    contacts: {
      email: string;
      phoneNumber: string;
    };
    location: {
      type: string;
      coordinates: number[];
    };
    image: {
      file: string;
      url: string;
    };
    type: string;
    cuisines: Cuisine[];
    additionalInfo: [];
    id: string;
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
  }[];
}

interface Cuisine {
  id: string;
  name: {
    en: string;
    ptPT: string;
    ptBR: string;
  };
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
