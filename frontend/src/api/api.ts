import { Payload } from "../components/sidebar";

export const postQuery = async (payload: Payload) => {
  const baseUrl = import.meta.env.VITE_API_ENDPOINT;
  const url = baseUrl+"/run_script"
  try {
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    result = await result.json();
    console.log(result);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: error,
    };
  }
};
