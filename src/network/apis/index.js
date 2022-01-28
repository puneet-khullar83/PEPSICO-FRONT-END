import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";
import { BASE_URL } from "../../utils/Constants";

//add your BASE_URL to Constants file
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Handle request process
apiClient.interceptors.request.use((request) => requestHandler(request));
// Handle response process
apiClient.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
