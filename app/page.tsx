import { Metadata } from "next";
import AboutMeCard from "@/components/bento-cards/about-me";
import MapCard from "@/components/bento-cards/map";
import GithubCalendar from "@/components/bento-cards/github-calendar";
import SpotifyStatusCard from "@/components/bento-cards/spotify-status";
import DiscordStatusCard from "@/components/bento-cards/discord-status";
import { LanyardResponse } from "models/lanyard-response";
import WeatherCard from "@/components/bento-cards/weather";
import WhatIUseCard from "@/components/bento-cards/what-i-use";
import { WeatherResponse } from "models/weather-response";
import Carousel from "@/components/bento-cards/carousel";
import XCard from "@/components/bento-cards/x";
import DiscordCard from "@/components/bento-cards/discord";
import GithubCard from "@/components/bento-cards/github";

export const metadata: Metadata = {
  title: "Abhishek AN",
  description: "Abhishek AN's portfolio",
  keywords: [
    "Abhishek",
    "Abhishek AN",
    "AgriApp",
    "Appiness",
    "Uses this",
    "BigBasket",
    "Iku",
    "Terrum",
    "HeartMath",
    "Climate Tech",
    "Climate action",
    "Communities",
    "Sustainability",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abhishek AN",
    description: "Abhishek AN's portfolio",
    url: "https://abhishekan.dev",
    type: "website",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek AN Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@im_abhishekan",
    title: "Abhishek AN",
    description: "Building things",
    images: [
      "https://pbs.twimg.com/profile_images/1668183655041359878/Jb2oyVRA_400x400.jpg",
    ],
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

async function fetchDiscordStatus(): Promise<LanyardResponse> {
  const response = await fetch(
    "https://api.lanyard.rest/v1/users/309409028306501635",
    {
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

async function fetchWeatherData(): Promise<WeatherResponse> {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=30e63b491f984bd8a8e204013241410&q=Bangalore&aqi=no",
    {
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

export default async function Home() {
  const data = await fetchDiscordStatus();
  const status = data.data.discord_status;
  const spotify = data.data.listening_to_spotify ? data.data.spotify : null;

  const weatherData = await fetchWeatherData();
  const temperature = weatherData.current.temp_c;
  const weatherCondition = weatherData.current.condition.text;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      <AboutMeCard />
      <DiscordStatusCard status={status} />
      <WeatherCard
        temperature={temperature}
        weatherCondition={weatherCondition}
      />
      <SpotifyStatusCard spotify={spotify} />
      <WhatIUseCard />
      <XCard />
      <MapCard />
      <Carousel />
      <DiscordCard/>
      <GithubCard/>
      <GithubCalendar />
    </div>
  );
}
