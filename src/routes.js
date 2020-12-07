import { UserEdit, UserList } from "./users";

const { Route } = require("react-router-dom");

const routes = [
  <Route
    key="edit-booking"
    path="/users/:id"
    component={(props: any) => <UserEdit {...props} />}
  />,
  <Route
    key="list-userds"
    path="/users"
    component={(props: any) => <UserList {...props} />}
  />,
];

export default routes;
