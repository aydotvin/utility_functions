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

const deepCopyThis = () => {
	let x = {
		name: "VP",
		address: {
			door: 1,
			geo: {
				lat: 128,
			},
		},
	};
	console.log("Before changes");
	console.log("x.name -> VP");
	console.log("x.address.door -> 1");
	console.log("x.address.geo.lat -> 128");

	console.log("--------------------------");

	console.log("Copying x to y with spread operator -> y = {...x}");
	console.log("Copying x to z with deep copy function -> z = deepCopy(x)");
	let y = { ...x };
	let z = deepCopy(x);

	console.log("--------------------------");

	console.log("changing y.name to VP2");
	y["name"] = "VP2";

	console.log("changing y.address.door to 11");
	y["address"]["door"] = 11;

	console.log("changing y.address.geo.lat to 200");
	y["address"]["geo"]["lat"] = 200;

	console.log("changing z.address.geo.lat to 98");
	z["address"]["geo"]["lat"] = 98;

	console.log("--------------------------");

	console.log("After changes");

	console.log(`x.name -> ${x.name}`);
	console.log(`x.address.door -> ${x.address.door}`);
	console.log(`x.address.geo.lat -> ${x.address.geo.lat}`);
	console.log("-----------");
	console.log(`y.name -> ${y.name}`);
	console.log(`y.address.door -> ${y.address.door}`);
	console.log(`y.address.geo.lat -> ${y.address.geo.lat}`);
	console.log("-----------");
	console.log(`z.name -> ${z.name}`);
	console.log(`z.address.door -> ${z.address.door}`);
	console.log(`z.address.geo.lat -> ${z.address.geo.lat}`);

	console.log("Changes to nested objects in y affecting those in x. But changes to nested objects in z is not affecting those in x or y as z is deep copied.");
};
