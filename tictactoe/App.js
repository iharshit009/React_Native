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
                      "https://media.licdn.com/dms/image/C5103AQFaHyaAU49Blg/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=lICWsj0xxrrethH-SbwGr2y8hVUB9xgdlp8ULd_iRes"
                  }}
                />
                <Body>
                  <Text>Harshit Jain</Text>
                  <Text note>Chill | Cool</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://lh3.googleusercontent.com/RAfrhIHwN16uHuAE3SalVS2fOgCXNb74k0_KZwp6g2XWG29eYt9LYxe0qoCbHZTaEPQEj5e-huVVDog1-05Pz28qRnpm1DnxI3iCM-oVKwpGk7uKlGlc89oQAEN5kL_3WzY9Y0TQuHD5O1uWTGfCgi-c_9YG4h73vsaZxu6igSh817uPPwDLcZ0VQGsZC5GoLIbSRpIT10yqywPZ4ySYpAGyfirCjYLiA54FKmW-avfCl6ZUekvZgAT42w2pdi5vd4cLLEfKMWIiJUfw25sznIOCLQgiKtDn1Dly9ZuP1JUepgSvGXJ3D0i-ufLWwMD12F8ADXhrcALYMIC1KXLvhrPXVAYc0n3L4Lsbgkn-Z7lvwX2_z6S6ROoanW12MAI4pz85BcAJOLBPZ05kokPvHXI9NTaOfW4kkhYh6sM99yQ8tYk6djhLIwcNW4Q9Nyk43ox4N9oMH0VTm9VJkBRXuYgnPhBE3qmYyp78qlyorNu7pxP0dgLAqyLU5vG5fq1V8iIuRuPpyxxwJzOE31SpXKNlw7cuYdNjwZkstzNqjwqp3Iov_LzfGxdg7bc7sWDyBzFZaMwU7mGjOjAlimRY5u39zJEVE4GjLvliLYGQNpBpUECC1sp9exrOT20jHIswcl_7Zah3IEJ0frqH6XMA758Yb4_p_eq7G9ZVHSIwiGV8ln7xV5UsLvrf=w349-h620-no"
                }}
                style={{ height: 500, width: null, flex: 1, borderRadius: 50 }}
                resizeMethod="resize"
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>121 Likes</Text>
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

          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://media.licdn.com/dms/image/C5103AQFaHyaAU49Blg/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=lICWsj0xxrrethH-SbwGr2y8hVUB9xgdlp8ULd_iRes"
                  }}
                />
                <Body>
                  <Text>Harshit Jain</Text>
                  <Text note>Chill | Cool</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://lh3.googleusercontent.com/TCXY3ly8dm1YOsGKtFTlLRTio6wS2CFtLm7_q7uomBERD3PB4JCIkLbZVRAqCv7lATlM18sOw6lg7gEyOuZ76SFbgj_e1HVfemOdnIgD9gZobrb6yPLUbl1-cJEs2XuK-A9h3jTbOt1tbNUTXNntAYFXKYNBIjmR5rFKwom_Ol6EUPB41mgJjBLcHL5gQu7y0wJoV0iBNhezr5PDvkmM3ZDWjZHaXc37HiiTfW4Sceesz-zYPwhxyhU7Dsj-1bgAW8fTkr2zHDPsqVB8igWYVacUstSc4PY__nGGyHTKKx0fUc3Dr4FyAUBxdwm-c30LTEYVLcDKGMmbcm73autPLyaJ2bKc_W52bNiGbenNGAi0GDOmzzhfEsNXvblAyVDQsHx33n1z7oqS0n1gnQnGMCyJVnQw_P9wvU7CJcklvUilvaMaf_xqYnJa0u5V5m3pOC2wNXCD8hUrPRyu_tQ1BUrsHsuh19LrLfd5xgMgpu5aiufO-b0b3zkE1QN7Ffbp1kOKM_tfMktOyRovYYhlzs3xaPcOrGO6yhaBtbEvEwkO_7PtxC9bl5nhbhu9p21_dyU7kLZj2gcjmZlQNFXntIjiMSZapIXL_IQQKlURzEhVRfozxSZALCp4TmjgYsio4yPczTc1iUjTBgAAHoJBNu2y208Swj6FWDSfKaSxTAsOc5xTMxgPrawy=w410-h620-no"
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
                  <Text>6 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Text>13h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
