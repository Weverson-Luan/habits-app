import { Text, View, ScrollView } from "react-native";

// components
import { Header } from "../../components/header";
import { DAY_SIZE, HabitDay } from "../../components/habit-day/habit-day";

// utils
import { generateRangeDatesFromYearStart } from "../../utils/generate-range-date-from-year";
import { useNavigation } from "@react-navigation/native";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const dateFromYearStart = generateRangeDatesFromYearStart();

const minimumSummaryDateSIzes = 18 * 5;

const amountOfDaysToFill = minimumSummaryDateSIzes - dateFromYearStart.length;

const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    return navigation.navigate("New");
  };
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header onPressNavigation={handleNavigation} />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {dateFromYearStart.map((date) => (
            <HabitDay
              key={date.toISOString()}
              onPress={() =>
                navigation.navigate("Habit", {
                  date: date.toISOString(),
                })
              }
            />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{
                  width: DAY_SIZE,
                  height: DAY_SIZE,
                }}
              ></View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export { Home };
