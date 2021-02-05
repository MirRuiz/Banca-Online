import { getAccount, getMovements } from './movements.api';
import { history } from '../../core/router';
import {
  mapMovementsListFromApiToVm,
  mapAccountFromApiToVm,
} from './movements.mapper';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();

  getMovements(params.id).then((apiMovements) => {
    addMovementRows(mapMovementsListFromApiToVm(apiMovements));
  });

  getAccount(params.id).then((account) => {
    onSetValues(mapAccountFromApiToVm(account));
  });
