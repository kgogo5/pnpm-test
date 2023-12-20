import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 숫자 제어
interface INumberControl {
  number: number;
  numberChange: ({ number }: { number: number }) => void;
}
export const numberControl = create(
  persist<INumberControl>(
    (set) => ({
      number: 0,
      numberChange: ({ number }) => set({ number }),
    }),
    {
      name: "number-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
