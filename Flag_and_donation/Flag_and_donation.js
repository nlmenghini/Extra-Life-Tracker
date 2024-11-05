(function( $, ELT ){
    /**********
     * Main Functionality
     **********/

    function start() {
        // Bind the test button to refresh the page on click
        $('#test-donation-btn').on('click', function() {
            // Simulate a new donation (refresh the page)
            location.reload();
        });

        checkForNewDonations();
        setInterval(checkForNewDonations, ELT.settings.refreshTimeMS); // Recheck for new donations at intervals
    }    

    /* Check for new donations */
    function checkForNewDonations() {
        ELT.settings.participantIds.forEach(function(participantId) {
            ELT.api.participantDonations(participantId, function(results) {
                if (results.length > 0) {
                    const curParticipant = results[0].participantID;
                    if (results.length > ELT.participants[curParticipant]?.donationsSeen) {
                        // Refresh the page if new donations are detected
                        location.reload();
                    }
                }
            });
        });    
    }

    start();
})(window.jQuery, window.ELT);
