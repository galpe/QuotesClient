/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $.ajax({
            type: "GET",
            url: "https://desolate-lake-2383.herokuapp.com/quote",
            dataType: "jsonp",
            jsonpCallback: 'callback',
            contentType: "application/json"
        }).done(function (data) {
            var parsed = jQuery.parseJSON(data),
                list = document.getElementById('QuotesList'),
                newLI = document.createElement('li');
            newLI.innerHTML = parsed.quote;
            list.appendChild(newLI);
        });
    });
});