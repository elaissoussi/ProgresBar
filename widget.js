WAF.define('ProgresBar', ['waf-core/widget'], function(widget) {

    var ProgresBar = widget.create('ProgresBar', {
        /*
         *A progress bar  Using  the HTML5 :  <progress> Tag
         *value (number)
         *max (number)
         *hideIfInactive (boolean, not bindable)
         */
        tagName: 'progress',
        value: widget.property({
            type: 'number',
            defaultValue: 30
        }),
        max: widget.property({
            type: 'number',
            defaultValue: 100
        }),

        hideIfInactive: widget.property({
            type: 'boolean',
            defaultValue: false,
            bindable: false
        }),

        init: function() {
            // set  the progress Attributes  {Value , Max}
            this.node.setAttribute("value", this.value());
            this.node.setAttribute("max", this.max());


            /*
             **Events
             *stop -> when stop api is called, or when value == max
             *start -> when start method is called or when value is > 0 and the state was stopped
             */

            this.value.onChange(function() {
                if (this.value() >= this.max() ) {
                    this.fire('stop');
                }
                else if (this.value() > 0 ) {
                    this.fire('start');
                }
            });
        },
        start: function() {},
        stop: function() {}

    });



    return ProgresBar;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */