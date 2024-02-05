import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "./model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { updateProfiledata } from "./model/services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { IProfileSchema, IProfile } from "./model/types/profile";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  IProfileSchema,
  IProfile,
  profileActions,
  fetchProfileData,
  profileReducer,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  updateProfiledata,
};
