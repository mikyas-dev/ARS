import { atom } from "recoil";

export const loggedInUserState = atom({
  key: "signedInUser", // unique ID (with respect to other atoms/selectors)
  default: JSON.parse(localStorage.getItem("loggedInUser")), // default value (aka initial value)
});

export const myApplicationsState = atom({
  key: "myApplicationsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const activeTabState = atom({
  key: "activeTabState",
  default: "Home",
});

export const apartmentListState = atom({
  key: "apartmentListState",
  default: [],
});
export const tenantListState = atom({
  key: "tenantListState",
  default: [],
});
