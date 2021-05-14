import { eventHelper } from '../helpers';

import { userDefinitions } from '../definitions';
import { eventConfig } from '../configs';

export const sendUserNameOnRequest: userDefinitions.SendUserNameOnRequest = (userName) => {
  eventHelper.on(eventConfig.eventNames.userNameRequest, () => {
    eventHelper.trigger(eventConfig.eventNames.userName, userName);
  });

  return () => {
    eventHelper.off(eventConfig.eventNames.userNameRequest, () => {
      eventHelper.trigger(eventConfig.eventNames.userName, userName);
    });
  };
};

export const setUserName: userDefinitions.SetUserName = (listener) => {
  eventHelper.once(eventConfig.eventNames.userName, listener);
};
