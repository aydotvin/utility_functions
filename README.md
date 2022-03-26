# Random utility functions

-   Open index html in browser
-   Open the console
-   Start clicking the buttons

# Description

1. ### sortArrayOfObjects(arrayToSort, keyToSortOn, valueType, isDescendingSort = false)

-   ##### This sorts the array of objects based on the keys passed.
-   ##### arrayToSort -> array of objects
-   ##### keyToSortOn -> keys are passed as an array of strings as given below,
    `{ "name":"john", "address":{ "door":97, "street":2, "zip":424242, "geo":{ "lat":111.111, "lng":98.231 } } }`
    ###### key is in first layer of object > ["name"] -> array of objects will be sorted based on "name".
    ###### key is in a nested object > ["address", "geo", "lat"] -> array of objects will be sorted based on "lat"(nested key).
-   ##### valueType -> the type of the value that is used for sorting. (dateTime, string, number)
-   ##### isDescendingSort -> optional - false by default

---

2. ### getSentenceCasedString(randomString = "")

-   ##### Converts incoming string to sentence cased string.
-   ##### The break points for converting to sentence case is added in the regex.

---

3. ### hasElementScrollReachedBottom(element = null)

-   ##### Checks if the passed element's scroll has reached the bottom or not.
-   ##### By default body is considered as the element.
-   ##### Using this to trigger on scroll pagination calls until I find a better way to handle the pagination.
