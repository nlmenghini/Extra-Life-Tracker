ELT.settings = {
	// animate the last donation instead of persist on screen
	animate: true,
	// animation pause duration
	animationPauseMS: 5000,
	// direction of animation
	animateTo: 'left',
<<<<<<< Updated upstream
	// get donation information for these participants
	participantIds: ["523738"], 
=======
	// get donation information for this team
	participantIds: [535396],
>>>>>>> Stashed changes
	// name to show if the donor name is null
	unknownDonorName: "Mysterious Hero",
	// Message displayed when donation amount it private to the donatee
	unknownDonationAmountText: "Private Donation",
	// if the header message should be shown
	showHeader: true,
	// header message to display at the top of the widget
	headerMessage: "New Donation!",
	// if the recipiant of the donation should be shown. This is meant
	// for when you have more than one participantID
	showRecipient: false,
	// text to use between the donation and the participant name if the
	// recipiant is being shown
	conjunctionText: "donated to",
	// List of tracks to pick from to play when a new donation comes in
	// If none are set no sound will play.
	soundList: [],
	// how long to display each donation before going to the next.	
	donationCycleMS: 10000,
	// how often should data be refreshed
	refreshTimeMS: 15000,
	// Incentive Settings
	incentives: {
		"DABB11ED-ABBA-CABB-FEEEEEEEEEEEEEED": {
			incentiveText: "Jelly Bean Time!",
			incentiveSoundList: ["BeanFanfare.ogg"]
		}
	}
};
