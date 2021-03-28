import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from './components/Loader';
import LaunchCards from './components/LaunchCard';
// import logo from './logo.svg';
import './App.css';

const query = gql`{
  launchesPast(limit: 10) {
    id
    mission_name
    details
    launch_date_utc
  }
}`;

type Launche = {
  id: string,
  mission_name: string,
  details: string,
  launch_date_utc: string,
}; 
interface IData {
  data: {
    launchesPast: Launche[];
  }
}

const List = ({ data }: IData) => {
  const { launchesPast = []} = data;

  return !!launchesPast.length
    ? launchesPast.map((launch: Launche) => <LaunchCards
      key={launch.id}
      title={launch.mission_name}
      details={launch.details}
      date={launch.launch_date_utc}
    />)
    : null;
}

const App = () => {
  const { loading, error, data = {} } = useQuery(query);
  if (error) {
    console.log(error);
  }

  return (
    <div className="App">
      {loading && <>Loading....</>}

      <h2>Last launches 🚀</h2>
      <Loader />
      <LaunchCards.List>
        {/* @ts-ignore */}
        <List data={data} />
      </LaunchCards.List>
    </div>
  );
};

export default App;
