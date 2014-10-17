(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
        });
    };

    function setSubject() {
        Office.context.mailbox.item.subject.setAsync("Hello world!");
    }

    function getSubject() {
        Office.context.mailbox.item.subject.getAsync(function (result) {
            app.showNotification('The current subject is', result.value)
        });
    }

    function addToRecipients() {
        Office.context.mailbox.item.to.addAsync([Office.context.mailbox.userProfile.emailAddress]);
    }

})();
