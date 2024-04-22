export interface Climate {
  message: string;
  cod:     string;
  count:   number;
  list:    List[];
}

export interface List {
  id:      number;
  name:    string;
  coord:   Coord;
  main:    Main;
  dt:      number;
  wind:    Wind;
  sys:     Sys;
  rain:    Rain;
  snow:    null;
  clouds:  Clouds;
  weather: Weather[];
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Rain {
  "1h": number;
}

export interface Sys {
  country: string;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}
