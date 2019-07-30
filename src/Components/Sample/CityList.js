import React, { Fragment } from 'react';
import City from './City';

const CityList = (props) => {

  const makeCityList = () => {
    return props.cityList.map(city => (
      <City 
        key={city.id}
        id={city.id}
        name={city.name}
        population={city.population}
      />
    ));
  }

  return (
    <Fragment>
      <City id="번호" name="이름" population="좋아요" />
      {makeCityList()}
    </Fragment>
  )
}

export default CityList;