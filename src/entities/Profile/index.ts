import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { IProfileSchema, IProfile } from "./model/types/profile";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export { IProfileSchema, IProfile, profileActions, fetchProfileData, profileReducer, ProfileCard };
