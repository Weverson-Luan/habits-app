/**
 * IMPORTS
 */

import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import dayjs from "dayjs";
import { BackButton } from "../../components/back-button";
import { Progress } from "../../components/progress";
import { CheckBox } from "../../components/checkbox";

interface IRoutesProps {
  date: string;
}
const Habit = () => {
  const route = useRoute();

  const { date } = route.params as IRoutesProps;

  const parseDate = dayjs(date);

  const dayOfWeek = parseDate.format("dddd");
  const dayOfMonth = parseDate.format("DD/MM");

  console.log("date: ", dayOfWeek);
  return (
    <View className="flex-1 bg-background px-7 pt-16">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <BackButton />
        <Text className="text-zinc-400 mt-6 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-zinc-400 font-extrabold text-3xl lowercase">
          {dayOfMonth}
        </Text>

        <Progress progressQuantity={30} />

        <View className="mt-6">
          <CheckBox title="Beber 2L de água" />

          <CheckBox title="Caminhar" checked={true} />
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Habit };
