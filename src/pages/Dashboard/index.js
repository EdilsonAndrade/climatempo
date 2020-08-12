import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator, Alert } from 'react-native';
import apiOpenWeather from '../../services/apiOpenWeather';
import Container from './styles';
import WeatherInfo from './WeatherInfo';

const LocalWeather = () => {
  const apiId = '22149167cce926c76d4b8ff7047bb747';
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [netWorkError, setNetWorkError] = useState(false);
  const getWeather = async () => {
    try {
      Geolocation.getCurrentPosition(

        async (position) => {
          const { latitude, longitude } = position.coords;

          if (latitude && longitude) {
            try {
              const response = await apiOpenWeather.get(`/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiId}`);
              setWeatherData(response.data);
              setNetWorkError(false);
            } catch (error) {
              setNetWorkError(true);
              Alert.alert('Erro', 'Verifique sua conexão');
            }
          }
        },
        () => {
          setNetWorkError(true);
          Alert.alert('Erro', 'Verifique sua conexão');
        },

      );
      setLoading(false);
    } catch {
      setNetWorkError(true);
      Alert.alert('Erro', 'Verifique sua conexão');
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (

    <Container>
      { loading ? <ActivityIndicator size={52} color="#7159c1" />
        : (
          <>
            <WeatherInfo
              refresh={() => getWeather()}
              netWorkError={netWorkError}
              city={weatherData ? weatherData.name : ''}
              temperature={weatherData ? weatherData.main.temp : null}
              feelsLike={weatherData ? weatherData.main.feels_like : null}

            />

          </>
        )}

    </Container>
  );
};

export default LocalWeather;
