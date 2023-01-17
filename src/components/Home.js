import Banner from "./Banner";
import Row from "./Row";
import requests from "../apiRequests/requests";
import { useState } from "react";
import ChannelRow from "./ChannelRow";
import Seasons from "./Seasons";

const API_KEY = "9c52cc6fe0b05b5e813aa331c7039d73";

const Home = () => {
  const [selectedOpt, setSelectedOpt] = useState("day");
  const fetchTrending = `/trending/all/${selectedOpt}?api_key=${API_KEY}&language=en-US`;
  
  return (
    <>
      <Banner />
      <Row title="ფილმები ქართულად" fetchUrl={requests.fetchTopRated} />
      <Row title="სერიალები ქართულად" fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="ტოპ ფილმები"
        selectedOpt={selectedOpt}
        setSelectedOpt={setSelectedOpt}
        show={true}
        fetchUrl={fetchTrending}
      />
      <ChannelRow title="არხები"/>
      <Row title="პრემიერა"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ახალი დამატებული ფილმები"  fetchUrl={requests.fetchActionMovies}/>
      <Seasons />
      <Row title="თურქული სერიალები" countrySide={true}  fetchUrl={requests.fetchTopRated}/>
      
      <Row title="თრეილერები"  fetchUrl={requests.fetchRomanceMovies}/>
      
    </>
  );
};

export default Home;
