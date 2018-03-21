import regeneratorRuntime from 'regenerator-runtime';
import { put } from 'redux-saga/effects';
import httpRequest from '../../server/httpWrapper';
import types from '../../types';
import api from '../../server/api';
import Logger from '../../server/Logger';
import { setOnStore } from '../actions';

const START = types.DELETE_START;
const FAILED = types.DELETE_FAILED;
const FAILED_NETWORK = types.DELETE_FAILED_NETWORK;
const FINISHED = types.DELETE_FINISHED;

export default function* deleteDoc(action) {
  const { targetName, schemaName, objectId } = action.payload;
  const target = targetName || schemaName;
  yield put(setOnStore({ targetName: target, status: START, error: null }));
  const res = yield* httpRequest(api.deleteObject, schemaName, objectId);
  if (res.error) {
    const errType = res.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    console.error('deleteDoc err', schemaName, objectId, res.err);
    Logger.onError(action, errType);
    yield put(setOnStore({ targetName: target, status: errType, error: res }));
  } else {
    yield put(
      setOnStore({ targetName: target, status: FINISHED, error: null })
    );
    Logger.onSuccses(action, FINISHED);
  }
}
/* eslint no-unused-vars: "off" */
