// Function to load JSON data from a local file
let data = fetch("people.json").then(res => res.json())
                               .then(data => console.log(data));