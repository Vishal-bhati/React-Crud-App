import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





export const AddUser = ({ onAdd }) => {
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onAdd(evt.target.name.value, evt.target.email.value);
        evt.target.name.value = "";
        evt.target.email.value = "";
    };

    return (
        <form className="d-grid gap-2"
            style={{ margin: "5rem" }} onSubmit={handleOnSubmit}>
            <h3>Add User</h3>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <Button variant="primary"
                type="submit" onSubmit={handleOnSubmit}>Add</Button>
            <hr />
        </form>
    );
};
