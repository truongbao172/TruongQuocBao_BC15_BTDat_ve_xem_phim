const stateDefault = {
  arrContent: [
    { name: "Thanh", content: "hello cybersoft" },
    { name: "bao", content: "hello cybersoft" },
  ],
};
export const FaceBookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      //vừa sao chep ra mảng mới vừa push 1 phần tử action.comment vào mảng
      state.arrContent = [...state.arrContent, action.comment];
      //state.arrContent.push(action.commnent
    }
    default:
      return { ...state };
  }
};
