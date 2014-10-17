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
     '        <t:BodyType>Text</t:BodyType>' +
     '        <t:AdditionalProperties>' +
     '            <t:FieldURI FieldURI="item:Body"/>' +
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
        var xmlDoc;
        var content;


        console.log(result);

        if (window.DOMParser) {
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(result, "text/xml");
            content = xmlDoc.getElementsByTagName('Body')[1].innerHTML;
        } else { // Internet Explorer
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(result);
            content = xmlDoc.getElementsByTagName('t:Body')[1].innerHTML;
        }

        console.log(xmlDoc);


        console.log('content',content);
        var lymbix = new $.lymbix('8c1a36ec73827cd2cfac9d943d981cbacf671d65');
        lymbix.tonalize(content, function (object)
        {
            console.log(object);
            buildDisplay(object);
        });
    }

})();
