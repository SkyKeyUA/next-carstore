/** @format */

import { CarProps } from '@/types';

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': `${process.env.DB_KEY}`,
    'X-RapidAPI-Host': `${process.env.DB_HOST}`,
  };
  const response = await fetch(`${process.env.DB_URL}`, { headers: headers });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`${process.env.DBCAR_URL}`);

  const { make, year, model } = car;

  url.searchParams.append('customer', `${process.env.DBCAR_KEY}`);
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
