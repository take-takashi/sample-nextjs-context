import { atom, selector } from "recoil";

const sampleAtom = atom<string>({
  key: "sampleAtom",
  default: "foo",
});

const sampleSelector = selector<string>({
  key: "sampleSelector",
  get: ({ get }) => {
    return get(sampleAtom);
  },
  set: ({ get, set }, newValue) => {
    set(sampleAtom, [...get(sampleAtom), newValue]);
  },
});

export { sampleAtom, sampleSelector };
