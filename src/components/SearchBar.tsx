/** @format */
'use client';

import React from 'react';
import { SearchManufacturer } from './SearchManufacturer';
import { SearchButton } from './SearchButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = React.useState('');
  const [searchModel, setSearchModel] = React.useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
