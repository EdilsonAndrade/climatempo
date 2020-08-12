import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import {
  ImagemBackGround,
  LocationText,
  TemperatureContainer,
  TempetureText,
  FeelsLikeContainer,
  FeelsLikeInfo,
  FeelsLike,
  Button,
  RefreshButtonView,
  RefreshButtonText,

} from './styles';
import ClearImage from '../../../assets/clearweather.png';
import ColdWeather from '../../../assets/coldweather.jpg';
import NetError from '../../../assets/neterror.jpg';

const WeatherInfo = ({
  city, feelsLike, temperature, netWorkError, refresh,
}) => {
  const [dimension, setDimension] = useState();
  const getImage = () => {
    if (netWorkError) {
      return NetError;
    } if (city) {
      return Number(temperature < 17 ? ColdWeather : ClearImage);
    }
  };

  Dimensions.addEventListener('change', () => {
    const dim = Dimensions.get('window');
    setDimension(dim.width >= dim.height);
  });
  const loadingWeather = () => (
    <ImagemBackGround resizeMode="cover" source={getImage()}>
      {!netWorkError
        ? (
          <>
            <LocationText>
              {city}
            </LocationText>
            <TemperatureContainer>
              <TempetureText>
                {Number(temperature).toFixed(0).toString().concat('º')}
              </TempetureText>
              <FeelsLikeContainer>
                <FeelsLikeInfo>Sensação </FeelsLikeInfo>
                <FeelsLike>{feelsLike !== '' ? Number(feelsLike).toFixed(0).toString().concat('º') : ''}</FeelsLike>
              </FeelsLikeContainer>
            </TemperatureContainer>
          </>
        )
        : null}
      <Button onPress={refresh} isPortrait={dimension}>
        <RefreshButtonView>
          <RefreshButtonText>Atualizar</RefreshButtonText>
        </RefreshButtonView>
      </Button>

    </ImagemBackGround>
  );
  return (
    <>
      {loadingWeather()}
    </>
  );
};

export default WeatherInfo;

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  feelsLike: PropTypes.number,
  temperature: PropTypes.number,
  netWorkError: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
};

WeatherInfo.defaultProps = {
  feelsLike: null,
  temperature: null,
};
