import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// import { SyncReduxForm } from './SyncReduxForm';
import { SyncFormikFormWithField } from './SyncFormikFormWithField';
// import { SyncFormikForm } from './SyncFormikForm';
// import { showResults } from './shared';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Synchronous Validation</h2>
      <h3>Formik</h3>
      <SyncFormikFormWithField />
    </div>
  </Provider>,
  rootEl
);

registerServiceWorker();
