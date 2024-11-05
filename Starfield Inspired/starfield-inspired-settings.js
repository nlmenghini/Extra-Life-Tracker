ELT.countdownTimerSettings = {
	// the date-time that the event will start in yyyy-mm-dd hh:mm+hh:mm format (24 hour with timezone offset)
	startTime: "2024-11-02 08:00-06:00",
	// the date-time the event will end
	endTime: "2024-11-03 08:00-07:00",
	// if seconds should be shown
	displaySeconds: true,
	// header message to display before event start
	beforeStartHeader: "STARTING IN",
	// header message to display while the event is going
	timerHeader: "TIME LEFT",
	// header message to display after the event ends
	afterEndHeader: "OVERTIME",
	// how often should data be refreshed (if you are displaying seconds set this to max. 1000)
	refreshTimeMS: 1000,
};

ELT.participantGoalSettings = {
	// get goal and amount raised a single participant
	participantId: "535396",
	// if the header message should be shown
	refreshTimeMS: 150000,
};

ELT.settings = {
	// animate each donation instead of persist on screen
	animate: false,
	// animation pause duration
	animationPauseMS: 5000,
	// direction of animation (left or right)
	animateTo: 'left',
	// get donation information for this team
	participantIds: [535396],
	// name to show if the donor name is null
	unknownDonorName: "Mysterious Hero",
	// Message displayed when donation amount it private to the donatee
	unknownDonationAmountText: "Private Donation",
	// if the header message should be shown
	headerMessage: "DONORS",
	// if the recipiant of the donation should be shown. This is meant
	// for when you have more than one participantID
	showRecipient: false,
	// text to use between the donation and the participant name if the
	// recipiant is being shown
	conjunctionText: "donated to",
	// how long to display each donation before going to the next.	
	donationCycleMS: 10000,
	// how often should data be refreshed
	refreshTimeMS: 150000,
};

window.config = {

	// the url of the DonorDrive API you wish to poll
	api: 'https://extralife.donordrive.com/api/',
	// the resource (events, participants, teams)
	resource: 'participants',
	// the ID of the specific resource to poll
	resourceID: 535396,

    // properties specific to streaming-thermometer
	streamingThermometer: {
		showDonations: false
	}

};
