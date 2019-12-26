import React from "react";
import { create } from "react-test-renderer";
import Application from "../components/Application/Application.component";

it("snapshot", () => {
  const tree = create(<Application />).toJSON();
  expect(tree).toMatchSnapshot();
});
