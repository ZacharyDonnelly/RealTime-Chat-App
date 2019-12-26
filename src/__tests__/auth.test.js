import React from "react";
import { create } from "react-test-renderer";
import Auth from "../components/Auth/Auth.component";

test("snapshot", () => {
  const tree = create(<Auth />).toJSON();
  expect(tree).toMatchSnapshot();
});
