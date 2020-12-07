import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit } from "./users";
import dataProvider from "./dataProvider";
import routes from "./routes";

const App = () => {
  return (
    <Admin dataProvider={dataProvider} customRoutes={routes}>
      <Resource name="users" />
    </Admin>
  );
};

export default App;
