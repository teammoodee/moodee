(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            getSubject();
        });
    };

    function getSubject() {
        Office.context.mailbox.item.subject.getAsync(function (result) {
            app.showNotification('The current subject is', result.value)
        });
    }

})();
