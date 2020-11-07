const request = require('request');
let options = {
  'method': 'POST',
  'url': 'https://ckg-910.wdf.sap.corp/sap/opu/odata/sap/API_MANUALACCRUALS/MnlAccrsAccrualSubobject',
  'headers': {
    'x-csrf-token': 'QdU9n8JAO8hnhHF6wHma7Q==',
    'Authorization': 'Basic d2FuZ2RvbmczOldhbmd3ZGMw',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cookie': 'sap-usercontext=sap-client=910; MYSAPSSO2=AjQxMDMBABhXAEEATgBHAEQATwBOAEcAMwAgACAAIAACAAY5ADEAMAADABBDAEsARwAgACAAIAAgACAABAAYMgAwADIAMAAwADcAMgA0ADAANwAyADIABQAEAAAACAYAAlgACQACRQD%2fAQwwggEIBgkqhkiG9w0BBwKggfowgfcCAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB1zCB1AIBATAoMBwxDDAKBgNVBAsTA0RMTTEMMAoGA1UEAxMDQ0tHAggKICAEAhEjATAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjAwNzI0MDcyMjIwWjAjBgkqhkiG9w0BCQQxFgQUJW8920IyILwmdqxP84rHfBs96RMwCQYHKoZIzjgEAwQwMC4CFQDPlUaOXYlCree1DFJd2lyATd0BtwIVALKsp0sl7qAOyrit9eZ73wVReNQI; SAP_SESSIONID_CKG_910=xyflqGWK-AQ096XpPMkP9Jx6ljPNrBHqn6j6Fj5VR88%3d'
  },
  body: JSON.stringify({"CompanyCode":"0001","ManualAccrualsAccrObjectType":"0RENTING","ManualAccrualsAccrObject":"CASE_S1_C1-1-001_0002","AccrualObjectDescription":"CASE_S1_C1-1_LN_OK","PersonResponsible":"WANGDONG3","to_Assgmt":{"results":[{"AccrAcctAssgmtValdtyEndDte":"2020-09-30T00:00:00","BusinessArea":"0001","CostCenter":"0NFF3VIAF7","ProfitCenter":"1000","WBSElementInternalID":"594","SalesOrder":"89","SalesOrderItem":"10"}]},"to_Item":{"results":[{"AccrualItemType":"ACT_COST","Ledger":"0L","AccrualMethod":"LINEAR","AccrSubobjHdrStartOfLifeDate":"2020-01-31T00:00:00","AccrSubobjHdrEndOfLifeDate":"2020-09-30T00:00:00","TotalAccrAmountInTransCrcy":"1200","TransactionCurrency":"EUR","TotalAccrualQuantityUnit":"bbl"},{"AccrualItemType":"ACCRL_STD","Ledger":"0L","AccrualMethod":"LINEAR","AccrSubobjHdrStartOfLifeDate":"2020-01-31T00:00:00","AccrSubobjHdrEndOfLifeDate":"2020-09-30T00:00:00","TotalAccrAmountInTransCrcy":"2000","TransactionCurrency":"EUR"},{"AccrualItemType":"ACTCST","Ledger":"0L","AccrualMethod":"ACT_COSTS","AccrSubobjHdrStartOfLifeDate":"2020-01-31T00:00:00","AccrSubobjHdrEndOfLifeDate":"2020-09-30T00:00:00","TotalAccrAmountInTransCrcy":"0.00","TransactionCurrency":"EUR"}]},"to_Param":{"results":[{"AccrSubobjParamValdtyEndDte":"2020-09-30T00:00:00","AccrualSubobjectParameter":"EXAMPLE","AccrualSubobjectParameterValue":"VALUE1"}]}})

};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});
