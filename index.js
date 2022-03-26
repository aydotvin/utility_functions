// SORT DATA
const sorter = async () => {
	const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
	const userData = await userResponse.json();
	console.log(userData[0]);
	console.log("^^object structure");
	console.log("----------------------------");
	console.log("Sorting based on nested key");
	console.log("----------------------------");
	console.log(sortArrayOfObjects(userData, ["name"], "string"));
	console.log("^^sorted based on  name");
	console.log("----------------------------");
	console.log(sortArrayOfObjects(userData, ["company", "name"], "string"));
	console.log("^^sorted based on company > name");
	console.log("----------------------------");
	console.log(sortArrayOfObjects(userData, ["address", "geo", "lng"], "number", true));
	console.log("^^sorted based on address > geo > lng");
	console.log("----------------------------");
};

//  SENTENCE CASE
const getSentenceCase = () => {
	const text = document.querySelector("input[name='sentence_case_input']").value || document.querySelector(".sample_text").textContent;
	console.log(getSentenceCasedString(text));
};

//  SCROLL BOTTOM?
const didIBottomOut = () => {
	const logText = hasElementScrollReachedBottom(document.querySelector(".text_container")) ? "Yes, yes it did." : "Not yet, keep going.";
	console.log(logText);
};

// DEFINITIONS
/**
 * *This function sorts an array of objects by a key value. The key value can be a date, string, or
 * number.*
 * @returns The sorted array.
 */
const sortArrayOfObjects = (arrayToSort, keyToSortOn, keyValueType, isDescendingSort = false) => {
	let placeHolderArray = [...arrayToSort];
	switch (keyValueType) {
		case "dateTime":
			placeHolderArray.sort((a, b) => {
				keyToSortOn.forEach((key) => {
					a = a[key];
					b = b[key];
				});
				const timestampA = new Date(a).getTime();
				const timestampB = new Date(b).getTime();
				return timestampA < timestampB ? -1 : 1;
			});
			break;
		case "string":
			placeHolderArray.sort((a, b) => {
				keyToSortOn.forEach((key) => {
					a = a[key];
					b = b[key];
				});
				return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
			});
			break;
		case "number":
			placeHolderArray.sort((a, b) => {
				keyToSortOn.forEach((key) => {
					a = a[key];
					b = b[key];
				});
				return parseFloat(a) < parseFloat(b) ? -1 : 1;
			});
			break;

		default:
			break;
	}
	if (isDescendingSort) {
		return placeHolderArray.reverse();
	}
	return placeHolderArray;
};

/**
 * * Convert the string to lowercase.
 * * Replace any character that is followed by a (space|.|!|?) with the same character, but in uppercase
 * @param [currentString] - The string to be converted to sentence case.
 * @returns The original string, but with the first letter of each sentence capitalized.
 */
const getSentenceCasedString = (currentString = "") => {
	return currentString
		.toString()
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
			return c.toUpperCase();
		});
};

/**
 * Check if the bottom of an element is within 5 pixels of the bottom of the window
 * @param [element=null] - The element to check. If not specified, the body element is used.
 * @returns A boolean value.
 */
const hasElementScrollReachedBottom = (element = null) => {
	let scrollTop = 0;
	if (!element) {
		scrollTop = window.pageYOffset;
		element = document.querySelector("body");
	} else {
		scrollTop = element.scrollTop;
	}
	return Math.abs(element.clientHeight - (element.scrollHeight - scrollTop)) < 5;
};
