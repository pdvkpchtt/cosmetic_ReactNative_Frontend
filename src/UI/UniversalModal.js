import styled from "styled-components";
import { Pressable, Text } from "react-native";
import InsetShadow from "react-native-inset-shadow";
import CustomButton from "./CustomButton";
import CrossIcon2 from "./icons/CrossIcon2";

const ViewOverlayBackdrop = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: absolute;
  align-items: center;
  justify-content: center;
`;
const ViewOverlayBlock = styled.View`
  width: 70%;
  height: 51.5%;
  background: #fff;
  border-radius: 13px;
`;
const ViewContentBlock = styled.View`
  flex: 1;
  padding: 0 0 21px 0;
  display: flex;
  flex-direction: column;
  /* background: rgba(0, 0, 0, 0.8); */
  justify-content: flex-start;
  align-items: start;
`;

const data = ["Тоник", "Сыворотка", "Крем", "Мист", "Тонер-пэды", "Эссенция"];

export const UniversalModal = ({
  setModalState = () => {},
  setFilter = () => {},
  selected,
}) => {
  return (
    <ViewOverlayBackdrop>
      <ViewOverlayBlock>
        <ViewContentBlock style={{ justifyContent: "center" }}>
          <Pressable
            onPress={setModalState}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              width: "100%",
              paddingRight: 20,
              paddingTop: 20,
            }}
          >
            <CrossIcon2 />
          </Pressable>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 20,
              textAlign: "center",
              color: "#1e1e1e",
              marginBottom: 32,
            }}
          >
            Категории
          </Text>

          {data.map((i, key) => (
            <Pressable
              key={key}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 19,
                paddingVertical: 6,
                marginHorizontal: 40,
              }}
              onPress={() => setFilter(i)}
            >
              <InsetShadow
                elevation={3}
                containerStyle={{
                  borderRadius: 999,
                  width: 14,
                  height: 14,
                  backgroundColor: selected === i ? "#FFE0B8" : "#F4F4F4",
                }}
                key={key}
              ></InsetShadow>

              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Montserrat-Regular",
                  color: "#AAA",
                  textDecorationLine: selected === i ? "underline" : "none",
                }}
              >
                {i}
              </Text>
            </Pressable>
          ))}

          <CustomButton
            title="Выбрать"
            moreStyle={{ marginTop: 42, marginHorizontal: 40 }}
            onClick={setModalState}
          />
          {/* 
          <Pressable
            style={({ pressed }) => [
              { alignItems: "center" },
              pressed && { opacity: 0.6 },
            ]}
          ></Pressable> */}
        </ViewContentBlock>
      </ViewOverlayBlock>
    </ViewOverlayBackdrop>
  );
};
