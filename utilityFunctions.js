/**
 * *This function sorts an array of objects by a key value. The key value can be a date, string, or
 * number.*
 * @returns The sorted array.
 */
const sortArrayOfObjects = (arrayToSort, keyToSortOn, valueType, isDescendingSort = false) => {
	let placeHolderArray = [...arrayToSort];
	switch (valueType) {
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

/**
 * For each key in the object, if the value is an object, then recursively call the function on the
 * value, otherwise, just assign the value to the new object.
 * @param [obj] - The object to be copied.
 * @returns A function that takes an object as an argument and returns a deep copy of that object.
 */
const deepCopy = (obj = {}) => {
	let returnValue = {};
	for (const key in obj) {
		const currentValue = obj[key];
		if (typeof currentValue == "object" && !Array.isArray(currentValue)) {
			returnValue[key] = deepCopy(currentValue);
		} else {
			returnValue[key] = currentValue;
		}
	}
	return returnValue;
};
