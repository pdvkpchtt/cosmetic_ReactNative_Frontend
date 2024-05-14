import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Input from "../UI/Input";
import AvatarIcon from "../UI/icons/AvatarIcon";
import CheckBox from "../UI/CheckBox";
import CustomButton from "../UI/CustomButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../store/profileSlice";
import PlusInCircleIcon from "../UI/icons/PlusInCircleIcon";
import * as ImagePicker from "expo-image-picker";

const Auth = () => {
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

  const getPhoto = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    dispatch(
      profileSlice.actions.editProfileInfo({
        image: res.assets[0].uri,
        name: name,
        password: password,
        password2: password2,
        email: email,
        checkbox: checkbox,
      })
    );
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 27,
        paddingHorizontal: 28,
        paddingVertical: 48,
        marginHorizontal: 21,
        display: "flex",
        flexDirection: "column",
        gap: 20,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Montserrat-Regular",
          textAlign: "center",
        }}
      >
        Регистрация
      </Text>

      <Pressable
        style={{
          width: 95,
          height: 95,
          marginHorizontal: "auto",
          position: "relative",
        }}
        onPress={getPhoto}
      >
        {!image ? (
          <AvatarIcon />
        ) : (
          <Image
            style={{ width: 95, height: 95, borderRadius: 999 }}
            source={{
              uri: image,
            }}
          />
        )}
        <View style={{ position: "absolute", right: 0, bottom: 0 }}>
          <PlusInCircleIcon />
        </View>
      </Pressable>

      <Input
        placeholder={"Имя"}
        value={name}
        onChange={(val) =>
          dispatch(
            profileSlice.actions.editProfileInfo({
              image: image,
              name: val.nativeEvent.text,
              password: password,
              password2: password2,
              email: email,
              checkbox: checkbox,
            })
          )
        }
      />
      <Input
        value={email}
        onChange={(val) =>
          dispatch(
            profileSlice.actions.editProfileInfo({
              image: image,
              name: name,
              password2: password2,
              password: password,
              email: val.nativeEvent.text,
              checkbox: checkbox,
            })
          )
        }
        placeholder="E-mail"
      />
      <Input
        value={password}
        onChange={(val) =>
          dispatch(
            profileSlice.actions.editProfileInfo({
              image: image,
              name: name,
              password2: password2,
              password: val.nativeEvent.text,
              email: email,
              checkbox: checkbox,
            })
          )
        }
        placeholder="Пароль"
        passwordtype
      />
      <Input
        value={password2}
        onChange={(val) =>
          dispatch(
            profileSlice.actions.editProfileInfo({
              image: image,
              name: name,
              password: password,
              password2: val.nativeEvent.text,
              email: email,
              checkbox: checkbox,
            })
          )
        }
        placeholder="Повторите пароль"
        passwordtype
      />
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <CheckBox
          onClick={() =>
            dispatch(
              profileSlice.actions.editProfileInfo({
                image: image,
                name: name,
                password: password,
                password2: password2,
                email: email,
                checkbox: !checkbox,
              })
            )
          }
          checked={checkbox}
        />

        <Text
          style={{
            color: "#919191",
            fontSize: 10,
            fontFamily: "Montserrat-Regular",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          Я согласен(а) с условиями обработки персональных данных
        </Text>
      </View>

      <CustomButton title="Зарегестрироваться" />
      <Text
        style={{
          marginTop: -10,
          fontFamily: "Montserrat-Regular",
          textAlign: "center",
          fontSize: 15,
          color: "#919191",
        }}
      >
        Уже есть аккаунт
      </Text>
    </View>
  );
};

export default Auth;
