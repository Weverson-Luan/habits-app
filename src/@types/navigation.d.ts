export type RootStackParamList = {
  Home: undefined;
  New: undefined;
  Habit: {
    date: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
