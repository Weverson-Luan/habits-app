/**
 * IMPORTS
 */

import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { BackButton } from "../../components/back-button";
import { CheckBox } from "../../components/checkbox";
import colors from "tailwindcss/colors";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
const New = () => {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToggleWeekDay = (weekDayIdIndex: number) => {
    if (weekDays.includes(weekDayIdIndex)) {
      //remover
      setWeekDays((preventState) =>
        preventState.filter((weekDay) => weekDay !== weekDayIdIndex)
      );
    } else {
      setWeekDays((preventState) => [...preventState, weekDayIdIndex]);
    }
  };
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-2xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800  focus:border-2 focus:border-green-600"
          placeholder="Exercícios, dormi bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="mt-4 mb-3 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            title={weekDay}
            onPress={() => handleToggleWeekDay(index)}
            checked={weekDays.includes(index)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="w-full h-14 flex flex-row items-center justify-center gap-1 bg-green-600 rounded-md mt-6 mb-6"
      >
        <Feather name="check" size={20} color={colors.white} />
        <Text className="text-white font-semibold text-base">Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * EXPORTS
 */
export { New };
