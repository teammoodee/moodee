﻿(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            sendRequest();
        });
    };

    function getSubjectRequest(id) {
        // Return a GetItem operation request for the subject of the specified item. 
        var result =
     '<?xml version="1.0" encoding="utf-8"?>' +
     '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
     '               xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
     '               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"' +
     '               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">' +
     '  <soap:Header>' +
     '    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />' +
     '  </soap:Header>' +
     '  <soap:Body>' +
     '    <GetItem xmlns="http://schemas.microsoft.com/exchange/services/2006/messages">' +
     '      <ItemShape>' +
     '        <t:BaseShape>IdOnly</t:BaseShape>' +
     '        <t:AdditionalProperties>' +
     '            <t:FieldURI FieldURI="item:Subject"/>' +
     '        </t:AdditionalProperties>' +
     '      </ItemShape>' +
     '      <ItemIds><t:ItemId Id="' + id + '"/></ItemIds>' +
     '    </GetItem>' +
     '  </soap:Body>' +
     '</soap:Envelope>';

        return result;
    }

    function sendRequest() {
        var mailbox = Office.context.mailbox;
        mailbox.makeEwsRequestAsync(getSubjectRequest(mailbox.item.itemId), callback);
    }

    function callback(asyncResult) {
        var result = asyncResult.value;
        var context = asyncResult.context;

        console.log(result);
        console.log(context);
    }

})();
