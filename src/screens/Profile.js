import { Pressable, Text, View, Image, FlatList } from "react-native";
import SettingsIcon from "../UI/icons/SettingsIcon";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../store/profileSlice";
import AvatarIcon from "../UI/icons/AvatarIcon";
import Paginator from "../components/Paginator";
import CustomButtonLigth from "../UI/CustomButtonLigth";
import { useState } from "react";
import { advice } from "../client_data/advice";
import AdviceItem from "../components/AdviceItem";
import { UniversalModal } from "../UI/UniversalModal";
import { AdviceModal } from "../UI/AdviceModal";
import Modal from "react-native-modal";

const Profile = ({ navigation }) => {
  const [name, email, password, checkbox, password2, image] = useSelector(
    (state) => [
      state.profile.name,
      state.profile.email,
      state.profile.password,
      state.profile.checkbox,
      state.profile.password2,
      state.profile.image,
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  const [iteminview, setiteminview] = useState(0);
  const [modalState, setModalState] = useState(false);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 40,
    waitForInteraction: true,
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",

          flex: 1,
          justifyContent: "space-between",
          gap: 28,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            alignItems: "center",

            display: "flex",
            flexDirection: "column",
            gap: 28,
            paddingHorizontal: 17,
          }}
        >
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              position: "relative",
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 24,
                textAlign: "center",
                position: "absolute",
                width: "100%",
              }}
            >
              Профиль
            </Text>

            <Pressable onPress={() => dispatch(profileSlice.actions.logOut())}>
              <SettingsIcon />
            </Pressable>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {!image ? (
              <AvatarIcon size={125} />
            ) : (
              <Image
                style={{ width: 125, height: 125, borderRadius: 999 }}
                source={{
                  uri: image,
                }}
              />
            )}

            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 15,
                textAlign: "center",
                width: "100%",
                marginTop: 15,
                marginBottom: 8,
                color: "#1e1e1e",
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 12,
                textAlign: "center",
                width: "100%",
                color: "#1e1e1e",
              }}
            >
              {email}
            </Text>
          </View>

          <CustomButtonLigth
            title="Жирный тип кожи"
            moreStyle={{ marginBottom: -20 }}
          />

          <Text
            style={{
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              textAlign: "center",
              width: "100%",
              color: "#1e1e1e",
              textDecorationLine: "underline",
            }}
          >
            Пройти тест заново
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 13,
            width: "100%",
            marginBottom: 18,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontStyle: "italic",
              fontSize: 20,
              width: "100%",
              color: "#AAAAAA",
              textDecorationLine: "underline",
              paddingHorizontal: 17,
            }}
          >
            #полезные_советы
          </Text>

          <FlatList
            data={advice}
            renderItem={({ item, index }) => (
              <AdviceItem
                item={item}
                data={advice}
                index={index}
                onClick={() => setModalState(true)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            // scrollEnabled={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onViewableItemsChanged={(item) => {
              setiteminview(item.viewableItems[0].item.id);
            }}
            viewabilityConfig={viewabilityConfig}
            overScrollMode="never"
          />

          <Paginator data={advice} iteminview={iteminview} />
        </View>
      </View>

      <Modal
        isVisible={modalState}
        backdropOpacity={0.5}
        style={{ margin: 0 }}
        backdropTransitionOutTiming={10}
      >
        <AdviceModal setModalState={() => setModalState(false)}></AdviceModal>
      </Modal>
    </>
  );
};

export default Profile;
