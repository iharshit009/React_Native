import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { AppLoading } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://lh3.googleusercontent.com/RVYYLrqoc55RPaECfbFomN0IFNoXSX-pddX4yylcjCPMKAjHmIqdZC9ACFVF9R8r2GHKQdc9D3PjwCzA5gLbEuAdoJa9ehrCIbpDwnQ5SrxiwxD1b_Lz267YWwYnIKd-vdI9hnAuDAPo76IwS3u0vO3HWNvsln_CwW4AXYJmX29Br5dllYDKy6Om4FaXTYhu0ovYIudXvcjwPvMrEvmfKDQJuxio5EFQeTn9cRnaZel814e5fJPVXeroxDY05MBqDa-4S48S_xt__oJACoxXR_1Kq3DxmF5-phZT1yPt2uCgGyuimBpj8dr3jSDDq35kHdwSnnM1w9SDraX5Px4zSBeNOUcIyRrKzUeIz0Id10WKRIObuiwoWI_Ks7vIoxCHOtQa2vZttrwP4NPSz3ezJahjMyf1ZJ-T6U1mBJjW7tFT1pKhL8RbeShNqOKnrlVsibc15GtUINL2cbbMmBizMdsd9UppZTYpekk7-qNGG7spIOsJ4g2aqPsshf0m4PeAlVSder8LVT0a1fqgoPgg55QWKHRJg4ld_dP-rf3Mb3D38G8zpOkyzpbOX79e9M_g4lFe-f4wKEvuT4dvtbI0KGl8EcmuRgbbaxfVBdGBzxbZbVDVEZeEPX7Zem4UnTDeLZkNKxJf9cfGpW64AnX4rbjN33a6VZ4abxRHbX1t1DB1j8fLXlst9fy2=w502-h669-no"
                  }}
                />
                <Body>
                  <Text>Harshit Jain</Text>
                  <Text note>Enjoy | sexist | Cool</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://lh3.googleusercontent.com/D3_JiZ--wbKyNJnwJarTQJwvjpFWIV6NXOFG0vFtehEiuUjxTPS4jB2alDfLqUD3TjqItR3c8Z-c6pIQw0BVndwrB6HSHwPO0KiHvip6bxColuefC8-hwAtgFOLOjWZKD_gkmB0EAe2UFy9Ijmm-s7Zix5I2gwiHCmehuXPlgHtSiZKHSgIf0G5ind7i6_uINh029LkRBC3fnLOmRrTitdG8qSQgWME0fO7ihg2uJhBCRQeC0IU0N-hMko61yuDfSWIlVDlUVFqyY4itff7x-aQZHJAyh2AC2aiYD6GicL4k-V8QlNEY7_XJLpTLozhRQrEUety5kCX51hF3QwYOe0n56Q7EVdUh8QJGU3OuADC0t9HXW9EYsENoiD6n-j7CtPCX3b58hi3vLFZkFUbg8rjFbcu8mjwk2uvg-0tjpNZUTJgaJbEKuwlPC0RJ240qUONgnKwTYca9SNb3AJnEE7Erl6iPrNx3dqGn35aYHcJpRL_DKd0wKwWI-jcRnIynPbcYMBH-kXurN-PchL9rOrAb-qfesH7cCDg9mNzDOKJAPE1yZUiFWSSSDSla5GAKNIXXsQmOTKO-dgeUYrAmN0XWRPT2xVZXlGFlIdTrMnhgm1TPO-M4XEX5ysLZgboD8O61DeP9EibDdbrJ0L90I1hmTuH2taCHuLWpo5QtJc3UEwbSebGvqcrE=w145-h220-no"
                }}
                style={{ height: 500, width: null, flex: 1, borderRadius: 50 }}
                resizeMethod="resize"
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
