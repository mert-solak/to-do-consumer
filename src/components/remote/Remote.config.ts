import { History } from 'history';

interface MountReturn {
  onHostNavigate: (params: { pathname: string }) => void;
}

interface MountParameters {
  onRemoteNavigate: (location: Location) => void;
  initialPath: string;
  defaultHistory?: History<unknown>;
}

export interface Props {
  mount: (element: Element | null, params: MountParameters) => MountReturn;
  withDefaultHistory?: boolean;
}
