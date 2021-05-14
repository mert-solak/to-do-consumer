import { eventHelper } from '../helpers';

import { userDefinitions } from '../definitions';
import { eventConfig } from '../configs';

export const setUserNameOnRequest: userDefinitions.SetUserNameOnRequest = (userName) => {
  eventHelper.on(eventConfig.eventNames.getUserName, () => {
    eventHelper.trigger(eventConfig.eventNames.setUserName, userName);
  });
};
