function renderHostname() {
    $.get('/api/hostname', function(hostname) {

            $("#HostName").append(
                "<h3>HostName: " + hostname +"</h3>");

    });
}

function renderRequestCount() {
    $.get('/api/requestno', function(count) {

            console.log("test" + count)
            $("#RequestCount").append(
                "<h3>RequestCount " + count +"</h3>");

    });
}
//when document is ready...
$(document).ready(function() {

    //run functions once before starting set interval loop

        renderHostname();
        renderRequestCount();


    //start timed interval loop - 15 seconds
  //  setInterval(function() { renderRequestCount(); }, 1000 * 15);


});