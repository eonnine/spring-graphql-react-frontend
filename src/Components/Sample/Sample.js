import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CityList from './CityList';

const getCities = gql`
  query {
    allCities {
      id
      name
      population
    }
  }
`;

const Sample = () => {
  return (
    <Query query={getCities}>
      {
        ({ loading, data, error }) => {
          if(loading) return <span>loading...</span>
          if(error) return <span>error</span>

          return (
            <CityList cityList={data.allCities} />
          )
        }
      }
    </Query>
  )
}

export default Sample;