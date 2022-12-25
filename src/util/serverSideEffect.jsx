import { useState, useContext } from 'react';
import Context from './Context.jsx';
const useServerEffect = (initial, key, effect) => {
  process.stderr.write('in sse effect hook \n');
  const context = useContext(Context);
  useState(context[key] || initial);
  if (context.requests) {
    process.stderr.write('context requests not null\n');
    context.requests.push(effect());
  } else {
    process.stderr.write('context requests is null\n');
  }
};
export default useServerEffect;
