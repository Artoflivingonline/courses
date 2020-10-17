$(function() {



    $.getJSON('config.json', function(data) {
        $.each(data.bmw, function(i, f) {
            var tblRow = "<tr>" + "<td>" + f.courseid + "</td>" +
                "<td>" + f.date + "</td>" + "<td>" + f.time + "</td>"  + "</tr>"
            $(tblRow).appendTo("#userdata tbody");
        });

    });

});