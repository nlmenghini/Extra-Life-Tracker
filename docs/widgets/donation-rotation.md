# Donation Rotation

Displays the name of the each donator and amount they donated to a specified participant or set of participants campaigns. When it reaches the end of the list it will loop through it again and it will continually check for new donors.

### Static

![Donation Rotation](../images/Last-Donation-Preview.png)

### Animated with header

![Animated Donation Rotation](../images/last-donation-animated-preview.gif)

### Animated with header and recipient

![Animated Donation Rotation with recipient](../images/last-donation-animated-with-recipient-preview.gif)

### Animation from left

![Animated Donation Rotation from left](../images/last-donation-animated-left-preview.gif)

## Settings
To update the settings update their value in `donation-rotation-settings.js` with any plain text editor. If you make settings changes while the scene is active you can refresh the widget by right clicking the source, selecting "Properties" and then clicking "Refresh cache of current page".

| Name | Description | Value Type | Default value |
|---|---|---|---|
| animate | Animate the last donation instead of persist on screen | Boolean | false |
| animationPauseMS | Duration that the donation message is displayed in milliseconds. Only used if animate is true | Integer | 5000 |
| animationDirection | Direction of animation. Only used if animate is true | "left" \| "right" | "left" |
| participantIds | Extra Life participant IDs | Array of Text | Empty array |
| unknownDonorName | Donor name to show if the donor name is null | Text | "Mysterious Hero" |
| unknownDonationAmountText | Text to display when donor has elected to only show the amount to the participant | Text | "Private Donation" |
| showHeader | If the header message should be shown | Boolean | false |
| headerMessage | Header message to display at the top of the widget| Text | "Last Donation" |
| showRecipient | Should the recipient of the donation be shown | Boolean | false |
| conjunctionText | Text to use between the donation and the participant name if `showRecipient` is true | Text | "donated to" |
| donationCycleMS | How long to display each donation before going to the next. | Integer | 10000 |
| refreshTimeMS | How often the data should be refreshed in milliseconds | Integer | 10000 |

### How to get someone's Participant ID

1. Go to [extra-life.org](https://www.extra-life.org/)
2. Navigate to the person's participant fundraising page
3. Copy the Participant ID out of the address bar. It is the number after "participantID" and should be at the end of the address. See example image

![Get-Participant-ID](../images/where-to-find-your-id.png)

## Setup in OBS or Streamlabs
1. In the "Sources" section click the "+" to add a new source, selecting "BrowserSource"
2. Select the "Create new" radio button
3. Set the name to something appropriate (e.x. "Extra Life Tracker - Last Donation")
4. Make sure "Make source visible" is checked
5. Click "OK" to create the source
6. Check "Local file"
7. Click "Browse" next to the "Local file" line and select `donation-rotation.html`
8. Set "Width" to at least 300 (the widget will fill the whole width given). 450 if using animation.
9. Set "Height" to 41. 70 if using animation. (+28 with header, +35 with recipient)
10. Click "OK"
11. Finally, if using animation, position the source to the right or left hand side of the screen to coincide with the animation.
