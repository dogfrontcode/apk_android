import Storage from "expo-storage";
import { Platform } from "react-native";

function isJson(value: string): boolean {
  try {
    return (typeof value === 'object' && value !== null);
  } catch (e) {
    return false;
  }
}

class StorageService {
  async getItem(key: string): Promise<any | null> {
    if (Platform.OS === "web") {
      let ls_return = localStorage.getItem(key);
      if (ls_return && isJson(ls_return)) {
        return JSON.parse(ls_return);
      }
      return ls_return;
    } else {
      return Storage.getItem({ key });
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === "web") {
      if (isJson(value)) {
        value = JSON.stringify(value);
      }
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
