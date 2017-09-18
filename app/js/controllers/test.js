var Utility = require('../config/Utility');
var logger = require('../classes/Logger');
var bodyParser = require("body-parser");
var Client = require('node-rest-client').Client;
var Promise = require("bluebird");
var rp = require("request-promise");
var SeekDynamicJSONService = function() {};
//var baseUrl = "https://uat-ticketingSystem.bdt.kpit.com/";
var baseUrl = Utility.baseURL;
var Result;

SeekDynamicJSONService.prototype.getDynamicJson = function(params, conn, data, colName) {
    var compoArray = data[0].data.component_array;
    console.log(data[0].data.ticket_info[0].on_behalf);
    var onbehalf = data[0].data.ticket_info[0].on_behalf;
    var columnsName = colName;
    var i = 0;
    var serviceList;
    var seekService;
    var keyParam;
    var array = [];
    var getUri;

    if (onbehalf == 'Y') {

        for (i = 0; i < compoArray.length; i++) {
            if (compoArray[i].webservice_call != "") {
                serviceList = compoArray[i].webservice_call;
                keyParam = compoArray[i].key_parameter;
                array.push({ "webservice_call": serviceList, "key_parameter": keyParam });

            }
        }

        console.log("\n WS Name.. " + JSON.stringify(array));
        var responses = [];
        var completed = 0;
        var data = params;
        return new Promise(function(resolve, reject) {
            if (array) {
                var ps = [];
                //serviceList = data.array;
                for (var i = 0; i < array.length; i++) {
                    var url = array[i].webservice_call;
                    var key_pram = array[i].key_parameter;
                    if (array[i].key_parameter == "" || array[i].key_parameter == null) {
                        getUri = baseUrl + array[i].webservice_call;
                    } else {

                        getUri = baseUrl + "seekGenericService";
                    }

                    var options = {
                        method: 'POST',
                        uri: getUri,
                        body: {
                            "data": {
                                "userName": params.userName,
                                "userNameFor": params.userNameFor,
                                "empId": params.userName,
                                "empName": params.empName,
                                "empIdFor": params.userNameFor,
                                "appId": params.appId,
                                "catId": params.catId,
                                "locId": params.locId,
                                "roleId": params.roleId,
                                "tokenId": params.tokenId,
                                "appKey": params.appKey,
                                "key_parameter": array[i].key_parameter,
                                "columnName": columnsName,
                                "url": url
                            }
                        },
                        json: true,
                    };
                    ps.push(rp(options));
                }
                Promise.all(ps)
                    .then(function(response) {
                        Result = response;
                        resolve(Result);
                    })
                    .catch(function(err) {
                        console.log("error in service file.. " + err);
                        reject(err);
                    });
            } else {
                reject(err);
            }
        });
    } else {
        for (i = 0; i < compoArray.length; i++) {
            if (compoArray[i].is_searchfield === 'N' && compoArray[i].webservice_call != "") {
                serviceList = compoArray[i].webservice_call;
                keyParam = compoArray[i].key_parameter;
                array.push({ "webservice_call": serviceList, "key_parameter": keyParam });
            }
        }
        var responses = [];
        var completed = 0;
        var data = params;
        return new Promise(function(resolve, reject) {
            if (array) {
                var ps = [];
                for (var i = 0; i < array.length; i++) {
                    var url = array[i].webservice_call;
                    var key_param = array[i].key_parameter;
                    //console.log("key_param..." +key_param );
                    //--- Check whether endpoint starts with seek
                    if (array[i].key_parameter == "" || array[i].key_parameter == null) {
                        getUri = baseUrl + array[i].webservice_call;
                    } else {

                        getUri = baseUrl + "seekGenericService";
                    }

                    var options = {
                        method: 'POST',
                        uri: getUri,
                        body: {
                            "data": {
                                "userName": params.userName,
                                "userNameFor": params.userNameFor,
                                "empId": params.userName,
                                "empName": params.empName,
                                "empIdFor": params.userNameFor,
                                "appId": params.appId,
                                "catId": params.catId,
                                "locId": params.locId,
                                "roleId": params.roleId,
                                "tokenId": params.tokenId,
                                "appKey": params.appKey,
                                "key_parameter": array[i].key_parameter,
                                "columnName": columnsName,
                                "url": url
                            }
                        },
                        json: true,

                    };
                    ps.push(rp(options));
                }
                Promise.all(ps)
                    .then(function(response) {

                        responses.push(response);
                        Result = response;
                        resolve(Result);
                    })
                    .catch(function(err) {
                        console.log("error in service file.. " + err);
                        reject(err);
                    });
            } else {
                reject(err);

            }
        });

    };

};
exports = module.exports = SeekDynamicJSONService;