import React from 'react';

import { mount } from 'remote/task/TaskApp';

import { Remote } from '../../components';

const TaskPage = () => (
  <div>
    <Remote mount={mount} />
  </div>
);

export default TaskPage;
