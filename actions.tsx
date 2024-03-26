"use server";

import { Client } from "./app/types/client";
import Image from "next/image";
import Link from "next/link";
import Profile from "./app/components/Profile";

export interface ClientData {
  results: Client[];
  info: {
    seed: string;
  };
}

const BASE_URL = `https://randomuser.me/api?results=10`;

export const getClients = async (page: string) => {
  try {
    const response = await fetch(`${BASE_URL}&page=${page}`, {
      headers: {
        "Cache-Control": "max-age=3600",
        requestAsyncStorage: "true",
      },
      cache: "force-cache",
    });

    const clients = await response.json();

    return clients.results.map((client: Client, i: number) => (
      <tr
        key={i}
        className="truncate overflow-hidden whitespace-nowrap bg-green-200"
      >
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <Image
                className="h-10 w-10 rounded-full"
                src={client.picture.thumbnail}
                alt="client profile picture"
                height={40}
                width={40}
              />
            </div>
            <div className="ml-4">
              <Link
                className="text-sm truncate font-medium text-amex cursor-pointer"
                href={`/clients/${clients.info.seed}:${client.login.uuid}:${page}`}
              >
                {`${client.name.title} ${client.name.first} ${client.name.last}`}
              </Link>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm">
          {client.dob.age}
        </td>
        <td className="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-sm">{`${client.location.city}`}</div>
        </td>
      </tr>
    ));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getClient = async (seed: string, uuid: string, page: string) => {
  try {
    const url = `${BASE_URL}&page=${page}&seed=${seed}&uuid=${uuid}`;

    const response = await fetch(url, {
      headers: {
        "Cache-Control": "max-age=3600",
        requestAsyncStorage: "true",
      },
    });

    const clientData = await response.json();

    if (!clientData.results || clientData.results.length === 0) {
      throw new Error(`No clients`, clientData);
    }

    const data = clientData.results.find(
      (client: Client) => client.login.uuid === uuid,
    );

    if (!data) {
      throw new Error(`Client with UUID ${uuid} not found`);
    }

    return <Profile data={data as Client} pageNumber={page} />;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
