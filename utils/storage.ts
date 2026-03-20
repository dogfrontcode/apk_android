import Storage from "expo-storage";
import { Platform } from "react-native";

class StorageService {
  async getItem(key: string): Promise<string | null> {
    if (Platform.OS === "web") {
      return localStorage.getItem(key);
    } else {
      return Storage.getItem({ key });
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === "web") {
      localStorage.setItem(key, value);
    } else {
      await Storage.setItem({ key, value });
    }
  }

  async removeItem(key: string): Promise<void> {
    if (Platform.OS === "web") {
      localStorage.removeItem(key);
    } else {
      await Storage.removeItem({ key });
    }
  }
}

const storage = new StorageService();
export default storage;
