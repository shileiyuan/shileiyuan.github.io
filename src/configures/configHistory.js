import { createHistory, useBasename } from 'history';
import { Project_Path } from './constant';

const history = useBasename(createHistory)({
  basename: Project_Path
});

export default history;

