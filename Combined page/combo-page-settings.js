ELT.countdownTimerSettings = {
	// the date-time that the event will start in yyyy-mm-dd hh:mm+hh:mm format (24 hour with timezone offset)
	startTime: "2023-11-04 08:00-04:00",
	// the date-time the event will end
	endTime: "2023-11-05 08:00-05:00",
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
	participantId: "516575",
	// if the header message should be shown
	refreshTimeMS: 15000,
};

ELT.settings = {
	// animate each donation instead of persist on screen
	animate: false,
	// animation pause duration
	animationPauseMS: 5000,
	// direction of animation (left or right)
	animateTo: 'left',
	// get donation information for this team
	participantIds: [516575],
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
	refreshTimeMS: 15000,
};