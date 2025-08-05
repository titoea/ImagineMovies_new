
export type movieItemProps = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type IOnboardingStackParamsList = {
  Landing: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type IMainStackParamsList = {
  Movie: {
    movieItem: movieItemProps;
  };
  MoviePreview: {
    movie_id: number;
  };
  SeatBooking : {
    backdrop: string
  },
  Refreshment: {
    seatArray: any[],
    time: string[],
    date: string[],
    ticketImage: string,
  }
  Ticket : {
    seatArray: any[],
    time: string[],
    date: string[],
    ticketImage: string,
    refreshmentsToBuy?: {
      id: string,
      type: string,
      name: string,
      price: number,
      quantity: number,
    },
    amountToPay?: number,
  }
} & ITabStackParamsList;

export type ITabStackParamsList = {
  Home: undefined;
  Search: undefined;
  TicketList: undefined;
  Account: undefined;
}
