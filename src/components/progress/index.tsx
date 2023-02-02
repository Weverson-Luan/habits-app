/**
 * IMPORTS
 */

import { View, Text } from "react-native";

export interface IProgressProps {
  progressQuantity?: number;
}
const Progress = ({ progressQuantity }: IProgressProps) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>Hii</Text>
    </View>
  );
};

/**
 * EXPORTS
 */
export { Progress };
