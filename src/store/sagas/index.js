import { all, takeLatest } from 'redux-saga/effects';

import { PodcastTypes } from '~/store/ducks/podcasts';

import { load } from './podcasts';

export default function* rootSaga() {
  return yield all([takeLatest(PodcastTypes.LOAD_REQUEST, load)]);
}
