## Filter Methods

- It is used to create new array containing only the elements that pass a specific test implemented by a callback function.

## key Characyeristic 

- Immutability: Does not change the original array; it returns a new one
- Shallow copy: The method creates a shallow copy of original
- Boolean Based: The callback function must return truthy balue to keep the element and a falsy value to discard it
- skips Empty slots: It does not execute from empty elements in sparse arrays.

## Common use cases

- Filtering numbers : Extracting specofoc values, such as even or number greater than threshold
- Searching strings: Finding items that include a specific substring or match aquery.
- Filtering objects: Extracting objects based on property values, such as filtering users by age or status.
- Removing Duplicates Using the index argument to keep only the first occurance of an element.
- Removing Invaild Data: Cleaning An array by removing null undefined, or empty values.