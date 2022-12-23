import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {

  const { city } = context.geo;
  const api = "f3a48673be7bc744559a9ff0d60d7642";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return context.json(data);
};