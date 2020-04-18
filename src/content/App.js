import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './Style';

const App = () => {
  // navigator.geolocation.getCurrentPosition(test2);
  // function test2(position) {

  //   var geo_text = "緯度:" + position.coords.latitude + "\n";
  //   geo_text += "経度:" + position.coords.longitude + "\n";
  //   geo_text += "高度:" + position.coords.altitude + "\n";
  //   geo_text += "位置精度:" + position.coords.accuracy + "\n";
  //   geo_text += "高度精度:" + position.coords.altitudeAccuracy + "\n";
  //   geo_text += "移動方向:" + position.coords.heading + "\n";
  //   geo_text += "速度:" + position.coords.speed + "\n";

  //   var date = new Date(position.timestamp);

  //   geo_text += "取得時刻:" + date.toLocaleString() + "\n";

  //   alert(geo_text);
    
  // }
  return pug`
    ThemeProvider(theme={})
      GlobalStyle
      Wrapper
        FlexItem
          img(src="https://pbs.twimg.com/media/EQG9G-aUcAA3Fw9?format=jpg&name=large" alt="")
        FlexItem
          h3
            | 20℃
          p
            | 3℃ / 16℃
  `;
}

export default App;

const Wrapper = styled.div`
  width: 340px;
  height: 230px;
  box-shadow: 2px 2px 7px -3px #666;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

const FlexItem = styled.div`
  flex: 0 0 50%;
`;
