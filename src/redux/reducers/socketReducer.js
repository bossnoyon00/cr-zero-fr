const initialState = {
  socket: null,
};

const socketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SOCKET_SERVER": {
      return {
        socket: payload,
      };
    }

    default:
      return state;
  }
};

export default socketReducer;
