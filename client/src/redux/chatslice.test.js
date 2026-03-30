import chatReducer, { addUserMessage } from "./chatslice";

// ✅ Proper axios mock
jest.mock("axios", () => ({
  post: jest.fn(),
}));

test("should add user message", () => {
  const initialState = {
    messages: [],
    loading: false,
    error: null,
  };

  const newState = chatReducer(
    initialState,
    addUserMessage("Hello")
  );

  expect(newState.messages.length).toBe(1);
  expect(newState.messages[0].content).toBe("Hello");
});