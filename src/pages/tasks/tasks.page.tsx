import React from 'react';

import { mount } from 'task/TaskApp';

import { Remote } from '../../components';

const TaskPage = () => (
  <div>
    <Remote mount={mount} />
  </div>
);

export default TaskPage;
