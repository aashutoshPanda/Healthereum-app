import { AsyncStorage } from "react-native";
export const setData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    console.log("error storing token", error);
  }
};

export const getData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log("error retreiving token", error);
    return null;
  }
};

export const removeToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("token removed");
  } catch (error) {
    console.log("error removing token", error);
    return false;
  }
};
