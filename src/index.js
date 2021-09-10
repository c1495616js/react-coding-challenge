import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import Loading from 'common/components/Loading';
import './styles/_main.scss';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <QueryClientProvider client={queryClient}>
        <Loading />
        <Router basename={process.env.PUBLIC_URL}>
          <Routes />
        </Router>
      </QueryClientProvider>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
