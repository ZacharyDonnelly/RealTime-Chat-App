import React from "react";
import { create } from "react-test-renderer";
import CurrentUser from "../components/CurrentUser/CurrentUser.component";
import { BrowserRouter } from "react-router-dom";

test("snapshot", () => {
  const tree = create(
    <BrowserRouter>
      <CurrentUser />
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
