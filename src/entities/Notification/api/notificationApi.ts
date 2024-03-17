import { rtkApi } from "shared/api/rtkApi";
import { INotification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsList: build.query<INotification[], null>({
      query: () => ({
        url: "/notifications",
      }),
    }),

    // тут могут быть другие методы
  }),
});

export const useNotificationsList = notificationApi.useGetNotificationsListQuery; // используем готовый хук на каждый метод
