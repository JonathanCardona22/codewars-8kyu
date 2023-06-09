// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
	if (name.charAt(0) === 'R' || 'r') {
		return `${name} plays banjo`;
	} else {
		return `${name} does not play banjo`;
	}
}

// better

function areYouPlayingBanjo(name) {
	return name[0].toLowerCase() == 'r'
		? name + ' plays banjo'
		: name + ' does not play banjo';
}
function areYouPlayingBanjo(name) {
	return (
		name +
		(name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') +
		' banjo'
	);
}
// best

const areYouPlayingBanjo = (name) =>
	name.startsWith('R') || name.startsWith('r')
		? `${name} plays banjo`
		: `${name} does not play banjo`;

// refactored by me

const areYouPlayingBanjo = (name) =>
	name[0].toLowerCase() == 'r'
		? `${name} plays banjo`
		: `${name} does not play banjo`;
