(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {


            sendRequest();
        });
    };


    // build a soap header to send to makeEwsRequestAsync to grab the body
    // this example specifies "Text" in BodyType, but there are other values
    function getBodyRequest(id) {
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


    // Get the context, send the request
    function sendRequest() {
        var mailbox = Office.context.mailbox;
        mailbox.makeEwsRequestAsync(getBodyRequest(mailbox.item.itemId), callback);
    }


    // handle the request results
    function callback(asyncResult) {
        var result = asyncResult.value;
        var context = asyncResult.context;
        var xmlDoc, content;

        console.log(result);

        // We can't just $.parseXML this stuff... it's way too ugly.
        // luckily, the dom parser is more forgiving...
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

        // connect to the lymbix API and get some content...
        var lymbix = new $.lymbix('2275c06beb43ed5e841b85dca3186e5ee39540e9');
        lymbix.tonalize(content, function (object)
        {
            buildDisplay(object);
        });
    }

})();
