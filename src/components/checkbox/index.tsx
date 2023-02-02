/**
 * IMPORTS
 */

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

// styles
import colors from "tailwindcss/colors";

interface ICheckboxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

const CheckBox = ({ checked = false, title, ...rest }: ICheckboxProps) => {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
    >
      {checked ? (
        <View className="w-8 h-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={32} color={colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

/**
 * EXPORTS
 */
export { CheckBox };
