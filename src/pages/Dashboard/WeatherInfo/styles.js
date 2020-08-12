import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ImagemBackGround = styled.ImageBackground`
width:100%;
flex:1;
justify-content: center;
align-items:center;

`;

export const LocationText = styled.Text`
  font-size: 29px;
`;
export const TemperatureContainer = styled.View`
align-items:flex-end;
`;

export const TempetureText = styled.Text`
  font-size:88px;
`;
export const FeelsLikeContainer = styled.View`
flex-direction:row;
justify-content:space-around;
align-items:baseline;
top:-30px;
`;
export const FeelsLikeInfo = styled.Text`
  font-size:15px;
  font-weight:bold;
`;
export const FeelsLike = styled.Text`
  font-size:28px;
`;
export const Button = styled(TouchableOpacity)`
  bottom:${(props) => (props.isPortrait ? '-10px' : '-100px')};
`;
export const RefreshButtonView = styled.View`
  width:200px;
  margin:0 auto;
  background: #f72c15;
  border-radius:6px;
  padding:10px;
  align-items:center;


`;

export const RefreshButtonText = styled.Text`
  font-size:15px;
  color: #fff;
`;
