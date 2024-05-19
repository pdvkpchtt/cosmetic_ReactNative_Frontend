import styled from "styled-components";
import { Pressable, ScrollView, Text, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";
import CustomButton from "./CustomButton";
import AdviceIconSmall from "./icons/AdviceIconSmall";

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
  width: 85%;
  height: 75%;
  background: #e6fcff;
  border-radius: 13px;
`;
const ViewContentBlock = styled.View`
  flex: 1;
  padding: 21px 28px 21px 28px;
  display: flex;
  flex-direction: column;
  /* background: rgba(0, 0, 0, 0.8); */
  justify-content: flex-start;
  align-items: start;
`;

const data = ["Тоник", "Сыворотка", "Крем", "Мист", "Тонер-пэды", "Эссенция"];

export const AdviceModal = ({ setModalState = () => {} }) => {
  return (
    <ViewOverlayBackdrop>
      <ViewOverlayBlock>
        <ViewContentBlock style={{ justifyContent: "flex-start" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AdviceIconSmall />
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 24,
              textAlign: "center",
              marginTop: 11,
              marginBottom: 21,
            }}
          >
            Чистка лица
          </Text>
          <ScrollView
            style={{
              // height: ,
              marginBottom: 31,
            }}
            fadingEdgeLength={250}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Montserrat-Regular",
                color: "#1E1E1E",
              }}
            >
              Чистка лица с ультразвуковым аппаратом - эффективная процедура,
              основанная на распаривании кожи и использовании ультразвуковых
              волн для удаления загрязнений и ороговевших клеток. Ультразвуковой
              аппарат мягко воздействует на кожу, разрушая капилляры
              загрязнений, что облегчает их удаление. Распаривание кожи перед
              процедурой помогает открыть поры, улучшая проникновение очищающих
              средств и повышая их эффективность. Для эффективного распаривания
              кожи лица перед чисткой ультразвуковым аппаратом рекомендуется
              использовать специализированные средства, такие как гели или маски
              с тепловым эффектом. Эти средства способствуют расслаблению кожи и
              расширению пор, улучшая проникновение ультразвуковых волн и
              повышая эффективность процедуры.
            </Text>
          </ScrollView>
          <CustomButton title="Выбрать" onClick={setModalState} />
        </ViewContentBlock>
      </ViewOverlayBlock>
    </ViewOverlayBackdrop>
  );
};
