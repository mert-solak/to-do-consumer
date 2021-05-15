import React from 'react';

import { mount } from 'remote/identification/IdentificationApp';

import { Remote } from '../../components';

const IdentificationPage = () => (
  <div>
    <Remote mount={mount} />
  </div>
);

export default IdentificationPage;
