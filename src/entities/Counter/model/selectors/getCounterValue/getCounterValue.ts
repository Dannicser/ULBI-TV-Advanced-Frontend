import { buildSelector } from "@/shared/lib/store/buildSelector";

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
