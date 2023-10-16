//--------------------------------------------------------------------------------
/*********** Countdown timer functionality **********/

(function( $, ELT ){
	function start() {
	update();
		setInterval(update, ELT.countdownTimerSettings.refreshTimeMS);
	}
	function update() {
		const $header = $('#timer-header');
		const $time = $('#countdown-timer-time');
		let $startTime = moment(ELT.countdownTimerSettings.startTime);
		let $endTime = moment(ELT.countdownTimerSettings.endTime);
		let $now = moment();
		let $headerValue;
		let $duration; 
		if ($startTime > $now) {
			$headerValue = ELT.countdownTimerSettings.beforeStartHeader;
			$duration = moment.duration($startTime.diff($now)); 
		} else if ($endTime > $now) {
			$headerValue = ELT.countdownTimerSettings.timerHeader;
			$duration = moment.duration($endTime.diff($now)); 
		} else {
			$headerValue = ELT.countdownTimerSettings.afterEndHeader;
			$duration = moment.duration($now.diff($endTime));
		}
		let $timeValue = "";
		if ($duration.asDays() >= 1) {
            $timeValue += Math.trunc($duration.asDays()).toString() + "d ";
		}
		$timeValue += $duration.hours().toString().padStart(2, "0") + ":";
		$timeValue += $duration.minutes().toString().padStart(2, "0");
		if (ELT.countdownTimerSettings.displaySeconds) {
			$timeValue += ":" + $duration.seconds().toString().padStart(2, "0");
		}
		$header.html($headerValue);
		$time.html($timeValue);
	}
	start();
})(window.jQuery, window.ELT);

//--------------------------------------------------------------------------------
/*********** Participant goal functionality **********/
(function( $, ELT ){
	function start() {
		update();
		setInterval(update, ELT.participantGoalSettings.refreshTimeMS);
	}
	function update() {
		ELT.api.participant(ELT.participantGoalSettings.participantId, onSuccess);
	}
	function onSuccess(result) {
		const $raised = $('#raised');
		const $goal = $('#goal');
		$raised.html(ELT.toCurrency(result.sumDonations));
		$goal.html(ELT.toCurrency(result.fundraisingGoal));
	}
	start();
})(window.jQuery, window.ELT);


//--------------------------------------------------------------------------------
/*********** Donation rotation functionality **********/

(function( $, ELT ){
	/**********
	 * Main Functionality
	 **********/

	var $participants = {};
	var $donations = [];
	var $curPosition = 0;
	const $donation = $('#donation');
	const $participantName = $('#participant-name');
	const $trackingContainer = $('#tracking-container');

	/* Initial setup of the layout and theme based on user settings */
	function start() {
		const header = $('#header');
		const donationConjunction = $('#donation-conjunction');

		if (ELT.settings.showHeader) {
			header.html(ELT.settings.headerMessage);
		} else {
			header.remove();
		}

		if( ELT.settings.animate ) {
			$trackingContainer.addClass('animate')
				// add animation direction
				.addClass(`animate-${ELT.settings.animateTo}`);
		}

		if (ELT.settings.showRecipient) {
			donationConjunction.html(ELT.settings.conjunctionText);
		} else {
			donationConjunction.remove();
			$participantName.remove();
		}
		
		ELT.settings.participantIds.forEach(function(participantId) {
			ELT.api.participant(participantId, function(result) {
				result['donationsSeen'] = 0;
				$participants[result.participantID] = result;
			});
		});

		checkForNewDonations();
		updateDonation();
		setInterval(checkForNewDonations, ELT.settings.refreshTimeMS);
		setInterval(updateDonation, ELT.settings.donationCycleMS); 
	}	

	/* Main loop */
	function checkForNewDonations() {
		ELT.settings.participantIds.forEach(function(participantId) {
			ELT.api.participantDonations(participantId, checkForNewDonationsOnSuccess);
		});	
	}
		

	function checkForNewDonationsOnSuccess(results) {
		if (results.length > 0) {
			const curParticipant = $participants[results[0].participantID];

			if (curParticipant != null && results.length > curParticipant.donationsSeen) {
				const newItems = results.slice(0, results.length - curParticipant.donationsSeen);
				
				$donations = $donations.concat(newItems);
				curParticipant.donationsSeen = results.length;
			}
		}
	}
	
	function updateDonation() {
		if ($donations.length > 0) {
			let donationText;
			let participant;
			const curDonation = $donations[$curPosition];

			if( curDonation ){
				const amount = curDonation.amount ? ELT.toCurrency(curDonation.amount) : ELT.settings.unknownDonationAmountText;
				// API returns "Anonymous" as the display name instead of a null value
				const donorName = !curDonation.displayName ? ELT.settings.unknownDonorName : curDonation.displayName;
				
				participant = $participants[curDonation.participantID].displayName;
				donationText = `<div class="donor-name">${donorName}</div><div class="donor-amount"> ${amount}</div>`;
			} else {
				participant = ' ';
				donationText = 'No donations';
			}

			$participantName.html( participant );
			$donation.html( donationText );

			if( ELT.settings.animate ) {
				$trackingContainer.addClass('animate-in');
				setTimeout(() => {
					$trackingContainer.removeClass('animate-in');
				}, ELT.settings.animationPauseMS);
			}

			if ($curPosition < $donations.length - 1) {
				$curPosition = $curPosition + 1;
			} else {
				$curPosition = 0;
			}
		}
	}

	start();
})(window.jQuery, window.ELT);
