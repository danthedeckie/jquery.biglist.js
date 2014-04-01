/**
 * jquery.biglist.js (C) 2014 Daniel Fairhead. MIT Licenced.
 **/
(function($) {
    "use strict";

    $.fn.biglist = function (template) {
        var tmpl_html = $(template).html();

        this.on('mouseenter', function () {
            var real = $(this).children('option:selected')[0];
            $(this).html(tmpl_html);
            $(this).children('option[value=' + real.value + ']').prop('selected', true);
        });

        this.on('mouseleave', function () {
            var current = $(this).children('option:selected')[0].outerHTML;
            $(this).html(current);
        });

        return this;
    }

}(jQuery));
