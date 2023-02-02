import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";

const WEEK_DAYS = 7; // 7 quandrado por linha
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;

export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface IHabitDayProps extends TouchableOpacityProps {}

const HabitDay = ({ ...rest }: IHabitDayProps) => {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE,
      }}
    ></TouchableOpacity>
  );
};

export { HabitDay };
