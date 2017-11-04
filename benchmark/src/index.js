import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import { SyncFormikFormWithField } from './SyncFormikFormWithField';
// import { SyncFormikForm } from './SyncFormikForm';
// import { showResults } from './shared';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Synchronous Validation Bench</h2>
      <SyncFormikFormWithField />
    </div>
  </Provider>,
  rootEl
);
