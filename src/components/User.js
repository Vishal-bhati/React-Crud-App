import React, { useState } from "react";

import { Button, Table } from "react-bootstrap";

export const User = ({ name, email, id, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        onEdit(id, evt.target.name.value, evt.target.email.value);
        setIsEdit(!isEdit);
    };

    return (
        <div >
            {isEdit ? (
                <form className="mt-2 p-7" onSubmit={handleOnEditSubmit}>
                    <input className="m-1" placeholder="Name" name="name" defaultValue={name} />
                    <input className="m-1" placeholder="Email" name="email" defaultValue={email} />
                    <Button variant="primary"
                        type="submit" className="m-2" onSubmit={handleOnEditSubmit}>Save</Button>
                </form>
            ) : (
                <div className="d-flex user border m-1"
                    style={{ margin: "5rem" }}>
                    <span className="user-name">{name}</span>
                    <span className="user-email">{email}</span>
                    <div>
                        <Button variant="primary"
                            type="submit" onClick={handleEdit}>Edit</Button>
                        <Button className="m-2" variant="danger"
                            type="submit" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
            )}
        </div>
    );
};
