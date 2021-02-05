import { getAccountList } from "./account-list.api";
import { addAccountRows } from "./account-list.helpers";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { onUpdateField } from "../../common/helpers";
import { history } from "../../core/router"

getAccountList().then(accountList =>{
     const vMAccountList = mapAccountListFromApiToVm(accountList);
     addAccountRows(vMAccountList);
     vMAccountList.forEach(account =>{
      onUpdateField(`select-${account.id}`,(event)=>{
               const route = event.target.value;
               history.push(route);
          }) 
     })
});