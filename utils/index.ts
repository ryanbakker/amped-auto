export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "3bdf99826fmsh241e5283b3cd6b3p1a95c7jsn4331926ed84e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
