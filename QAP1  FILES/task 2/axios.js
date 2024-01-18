const axios = require("axios");

async function fetchData() {
  try {
    // Make an HTTP GET request to retrieve existing todos
    const getResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // Log the response data to the console
    console.log("GET Request Response Data:");
    console.log(getResponse.data);
    console.log(
      "\nAll todo information retrieved and logged to the console.\n"
    );

    // Make an HTTP POST request to create a new todo item
    const postResponse = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: 1, // Replace with your desired user ID
        title: "New Todo Item",
        completed: false,
      }
    );

    // Log the response data of the POST request
    console.log("POST Request Response Data:");
    console.log(postResponse.data);
    console.log("\nNew todo item created and logged to the console.\n");
  } catch (error) {
    // Handle any errors
    console.error("Error:", error.message);
  }
}

// Call the async function to fetch and create todo items
fetchData();