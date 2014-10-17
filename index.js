(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            getBody();
        });
    };

    function getBody() {
        console.log(Office.context.mailbox.item.body);
    }
})();
