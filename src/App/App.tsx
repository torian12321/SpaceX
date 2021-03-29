import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';
import LaunchCards from '../components/LaunchCard';
import { useModal } from "../components/Modal";
import { ModalDetails } from "./ModalDetails";
import './App.css';

const query = gql`{
  launchesPast(limit: 10) {
    id
    mission_name
    details
    launch_date_utc
    links {
      article_link
      flickr_images
    }
  }
}`;

type Launche = {
  id: string,
  mission_name: string,
  details: string,
  launch_date_utc: string,
  links: {
    article_link: string,
    flickr_images: string[],
  }
}; 

const App = () => {
  const { loading, error, data = {} } = useQuery(query);
  const [selectedLaunch, setSelectedLaunch]: any = useState({});
  const { showModal, hiddeModal, isVisible } = useModal();
  const { launchesPast = []} = data;
  
  const handleClickLaunchCard = (id: string) => {
    const mission: Launche = launchesPast.find((launch: Launche) => launch.id === id)
    const { links } = mission;
    const { flickr_images = [] } = links;

    setSelectedLaunch({
      title: mission.mission_name,
      desc: mission.details,
      img: flickr_images[0] || '',
      link: links.article_link,
    });

    showModal();
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
    <ModalDetails closeAction={hiddeModal} isVisible={isVisible} data={selectedLaunch} />

    <div className="App">
      <h2>Last launches 🚀</h2>
      {loading
        ? <Loader />
        : (
          <LaunchCards.List>
            {launchesPast.map((launch: Launche) => <LaunchCards
              key={launch.id}
              id={launch.id}
              title={launch.mission_name}
              details={launch.details}
              date={launch.launch_date_utc}
              onClick={handleClickLaunchCard}
          />)}
          </LaunchCards.List>
        )}
    </div>
    </>
  );
};

export default App;
