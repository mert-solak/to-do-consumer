import { eventConfig } from '../configs';
import { loadingDefinitions } from '../definitions';
import { eventHelper } from '../helpers';

export const setIsLoading: loadingDefinitions.SetIsLoading = (listener) => {
  eventHelper.on(eventConfig.eventNames.isLoading, listener);
};
