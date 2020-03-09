import React from 'react';
import {SnackbarProvider} from 'notistack';
import {Notifier} from './common/Notifier/Notifier';
import {createStyles, makeStyles} from '@material-ui/core';
import {SummaryPage} from './pages/SummaryPage/SummaryPage';
import {NotifierProvider} from '../context/notifier/notifierProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const useStyles: () => Record<string, string> = makeStyles(() =>
  createStyles({
    info: {backgroundColor: '#9b9b9b'},
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <SnackbarProvider
      classes={{
        variantInfo: classes.info,
      }}
    >
      <NotifierProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={SummaryPage} />
          </Switch>
          <Notifier />
        </Router>
      </NotifierProvider>
    </SnackbarProvider>
  );
};
