ELT.settings = {
	// the date-time that the event will start in yyyy-mm-dd hh:mm+hh:mm format (24 hour with timezone offset)
	startTime: "2023-11-04 09:00-04:00",
	// the date-time the event will end
	endTime: "2023-11-05 09:00-05:00",
	// if seconds should be shown
	displaySeconds: true,
	// if a header should be displayed above the timer
	displayHeader: true,
	// header message to display before event start
	beforeStartHeader: "STARTING IN",
	// header message to display while the event is going
	header: "TIME LEFT",
	// header message to display after the event ends
	afterEndHeader: "OVERTIME",
	// how often should data be refreshed (if you are displaying seconds set this to max. 1000)
	refreshTimeMS: 1000,
};
