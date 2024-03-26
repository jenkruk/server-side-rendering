import React from "react";
import { Client } from "../types/client";
import Image from "next/image";
import mobileIcon from "@/public/profile/mobile.svg";
import Link from "next/link";

interface ProfileProps {
  data: Client;
  pageNumber: string;
}

const Profile: React.FC<ProfileProps> = ({ data, pageNumber }) => {
  const { picture, name, dob, location, email, cell } = data as Client;

  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full pb-5 px-5">
      <Link
        href={`/clients?page=${pageNumber}`}
        className="goBack flex items-center group hover:text-amex hover:cursor-pointer mb-24 mr-auto ml-7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2">Go Back</span>
      </Link>
      <div className="flex flex-col text-lightest w-full relative overflow-hidden bg-amex rounded-lg pb-5 shadow-2xl max-w-[300px]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={picture.large}
            alt="User Image"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-t-md mb-3"
          />
          <div className="px-3 w-full">
            <h2 className="text-xl font-thin mb-1">
              {name.first} {name.last}
            </h2>
            <p className="flex mb-1 whitespace-nowrap">
              <span>{new Date(dob.date).toLocaleDateString()}, </span>
              <br />
              <span className="ml-2">{dob.age} yrs</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col px-3">
          <div className="flex flex-col items-center justify-center my-3 border-y border-transparent py-3">
            <p>
              {location.street.number} {location.street.name}
            </p>
            <p>
              {location.city}, {location.state}
            </p>
            <p className="flex justify-around w-full">{location.postcode}</p>
            <p>{location.country}</p>
          </div>
          <p className="w-full my-3 flex">
            <Image
              src={mobileIcon}
              width={15}
              height={15}
              alt="phone number"
              className="ml-auto mr-2"
            />
            {cell}
          </p>
          <p className="ml-auto">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
