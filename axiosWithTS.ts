import axios, { AxiosResponse } from "axios"; 
// importing the axios library here
// AxiosResponse<T> -> represents the structure of the HTTP response received from the API according to the generic <T> provided

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} // made an interface according to which we'll recieve the data

const fetchData = async () => {
  try {
    // const res: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // axios.get() -> calls ths API url and gets the data from that URL, returning the data in the specified format

    const res = await axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1") // alternative also works

    console.log("Todo: ", res.data);
    // logging the response

  } catch (error: any) {
    // checking for specific Axios errors
    if (axios.isAxiosError(error)) {
      console.error("Axios error", error.message);

      if (error.response) {
        console.log("Status: ", error.response.status);
        console.log("Data: ", error.response.data);
      }
    } else {
        // JS errors or NON_Axios errors
      console.error("Error: ", error.message);
    }
  }
};

fetchData();
