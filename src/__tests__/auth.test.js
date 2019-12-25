import React from "react";
import { create } from "react-test-renderer";
import Auth from "../components/Auth/Auth.component";

test("snapshot", () => {
  const c = create(<Auth />);
  expect(c.toJSON()).toMatchSnapshot();
});
