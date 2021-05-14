import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Props } from './Remote.config';

export const Remote: React.FC<Props> = ({ mount, withDefaultHistory }) => {
  const mountElementRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onHostNavigate } = mount(mountElementRef.current, {
      initialPath: history.location.pathname,
      onRemoteNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      defaultHistory: withDefaultHistory ? history : undefined,
    });

    history.listen(onHostNavigate);
  }, []);

  return <div ref={mountElementRef} />;
};
