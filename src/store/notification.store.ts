import { Notification } from "@/types";
import { generateID } from "../utils";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NorificationState = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};
export const useNotificationStore = create<NorificationState>()(devtools((set, get) => ({
  notifications: [],
  showNotification: (notification) => {
    const id = generateID();
    set((state) => ({
      notifications: [...state.notifications, { id: id, ...notification }],
    }));
    setTimeout(() => {}, 5000);
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((p) => p.id !== id),
    }));
  },
})))

export const showNotification=(notifications:Omit<Notification,'id'>[])=>{
notifications.forEach((p)=>useNotificationStore.getState().showNotification(p))
}