import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  Toolbar,
  DeleteButton,
} from "react-admin";
import { useParams } from "react-router-dom";

export const UserList = (props) => (
  <List resource="users" basePath="/users" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => {
  const params = useParams();

  return (
    <Edit resource="users" basePath="/users" id={params.id} {...props}>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );
};

function UserEditToolbar({ width, ...props }: ToolbarProps) {
  return (
    <Toolbar {...props}>
      <DeleteButton undoable={false} />
    </Toolbar>
  );
}
