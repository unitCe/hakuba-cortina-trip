import { useEffect, useState } from "react";

const STORAGE_KEYS = {
  schedules: "tripnote-schedules-v1",
  members: "tripnote-members-v1",
  settings: "tripnote-settings-v1",
};

export function readStoredValue(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function useStoredState(storageKey, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(storageKey, initialValue));

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.error("ブラウザへの保存に失敗しました。", error);
    }
  }, [storageKey, value]);

  return [value, setValue];
}

export { STORAGE_KEYS };
