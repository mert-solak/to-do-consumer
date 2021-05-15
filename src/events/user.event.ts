import { eventConfig } from '../configs';
import { eventHelper } from '../helpers';
import { userDefinitions } from '../definitions';

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
