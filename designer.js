(function(ProgresBar) {

//    /* Default width and height of your widget */
    ProgresBar.setWidth('200');
    ProgresBar.setHeight('30');

    /* Define custom event for your widget */
    ProgresBar.addEvent('start');
    ProgresBar.addEvent('stop');

    /* Add a Label property */
    ProgresBar.addLabel({
        'defaultValue': 'ProgressBar',
        'position': 'top'
    });




});

