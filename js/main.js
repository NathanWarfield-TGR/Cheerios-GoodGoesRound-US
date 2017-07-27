// viking main.js
var viking = {

    searchField: function() {
        var
            $input = $('.search-field input')
        ;

        $input.on("keyup", function() {
            var
            $this = $(this),
            $currentVal = $this.val(),
            $invalid = $('.searchAlert#dod-not-found'),
            $valid = $('.searchAlert#dod-found'),
            $dods = [
                "123",
                "234",
                "345"
            ];

            // valid DOD in field
            if  (
                    ($currentVal.match(/^\d+$/)) && //only numbers...
                    ($currentVal.length === 3) && //only 3 of them...
                    ($.inArray($this.val(), $dods) > -1) //and it's in the list...
                )
            {
                console.log( "Valid DOD: " + $this.val() );
                $valid.slideDown(250);
                viking.searchSpinner('#spin');
            }

            // invalid DOD in field
            if  (
                    ($currentVal.match(/^\d+$/)) && //only numbers...
                    ($currentVal.length === 3) && //only 3 of them...
                    ($.inArray($this.val(), $dods) == -1) //and it's NOT in the list...
                )
            {
                console.log( "Invalid DOD: " + $this.val() );
                $invalid.slideDown(250);
                $valid.slideUp();
            }

            // not long enough for a DOD
            if  ($currentVal.length < 3)
            {
                $invalid.slideUp();
                $valid.slideUp();
            }

        });

    },

    searchSpinner: function(target) {
        var opts = {
            lines: 13, // The number of lines to draw
            length: 6, // The length of each line
            width: 2, // The line thickness
            radius: 10, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#FFF', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: true, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent in px
            left: '80%', // Left position relative to parent in px
            visibility: true,
            scale: 0.5
        };
        $(target).after(new Spinner(opts).spin().el);
    }

};

$(document).ready(function() {
    viking.searchField();
});

//$(window).resize(function() {});

//$(window).scroll(function() {});
