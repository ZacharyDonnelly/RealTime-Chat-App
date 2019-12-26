import React from "react";
import AddMessage from "../components/AddMessage/AddMessage.component";
import { create } from "react-test-renderer";

test("snapshot", () => {
  const tree = create(<AddMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("creates post", () => {
  const tree = create(<AddMessage search={() => {}} />);
  const instance = tree.getInstance();

  expect(instance.state.message).toBe("");
  instance.handleSubmit("test");
  expect(instance.state.message).toBe("");
});
