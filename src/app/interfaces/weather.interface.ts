export interface Weather {
  id?: number;
  name?: string;
  cod?: number;
  icon?: string;
  description?: string;
  temp?: number;
  main?: string;
  minMaxTemp?: MinMaxWeather;
}

interface MinMaxWeather {
  date?: string;
  min?: number;
  max?: number;
}
