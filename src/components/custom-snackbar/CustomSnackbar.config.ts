import { snackbarDefinitions } from '../../definitions';

export interface Props {
  listenErrors: (listener: (errorMessage: string) => void) => void;
}
