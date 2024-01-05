import axios from "axios";

const setResponseSuccess = (resp) => {
  return {
    authToken: resp.headers.authorization,
    status: resp.status,
    header: resp.data.header,
    payload: resp.data.payload,
  };
};

function setResponseError(err) {
  return {
    authToken: null,
    status: err.response.status,
    header: err.response.data.header,
    payload: err.response.data.payload,
  };
}

export const ApiPost = async (url, body, authToken) => {
  try {
    const resp = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    });
    return setResponseSuccess(resp);
  } catch (error) {
    return setResponseError(error);
  }
};

export const ApiGet = async (url, authToken) => {
  try {
    const resp = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    });
    return setResponseSuccess(resp);
  } catch (err) {
    return setResponseError(err);
  }
};
