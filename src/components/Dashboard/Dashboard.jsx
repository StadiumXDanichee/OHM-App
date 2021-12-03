import { useQuery, gql } from '@apollo/client';
import React from 'react';
import './Dashboard.css';
import Pepe from '../../images/pepe.png';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Dashboard() {
  const { loading, error, data } = useQuery(gql`
    query {
      protocolMetrics(first: 1) {
        ohmPrice
        totalValueLocked
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const metrics = data?.protocolMetrics[0];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-item">
          <p className="title">Backing per OHM</p>
          <p className="description">
            ${numberWithCommas(Number(metrics.ohmPrice).toFixed(2))}
          </p>
        </div>
        <div className="dashboard-item">
          <p className="title">Treasury price OHM</p>
          <p className="description">
            ${numberWithCommas(Number(metrics.totalValueLocked).toFixed(2))}
          </p>
        </div>
      </div>
      <div className="dashboard-container">
        <img src={Pepe} alt="pepe" />
      </div>
    </div>
  );
}

export default Dashboard;
