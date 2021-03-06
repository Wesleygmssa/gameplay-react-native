import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { View, Text, ImageBackground } from "react-native";
import { Header } from "../../components/Header";

import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/Buttonicon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Wesley",
      avatar_url: "https://gitHub.com/wesleygmssa.png",
      status: "online",
    },

    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://gitHub.com/wesleygmssa.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendário</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
