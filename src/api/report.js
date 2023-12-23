import axios from "axios";

const reportUrl = "http://localhost:8000/reports/"; // Replace with your actual API endpoint

export const submitReport = async ({ user_id, content }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";

    if (!accessToken) {
      console.error("Access token not available");
      return null;
    }

    const response = await axios.post(
      reportUrl,
      {
        user_id: user_id,
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json", // Set content type if needed
        },
      }
    );

    console.log("Report submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Reporting failed:", error.message);
    return null;
  }
};