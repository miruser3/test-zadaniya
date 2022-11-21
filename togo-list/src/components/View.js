import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../Firebase';

const View = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    console.log(id);
    useEffect(() => {
        db.child(`/contact/${id}`)
            .get()
            .then((data) => {
                if (data.exists) {
                    setUser({ ...data.val() })
                } else {
                    setUser({})
                }
            })
    },[id])


    return (
        <div style={{ marginTop: "150px" }}>
            <p>Contact Details</p>
            <div>
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />

                <strong>EMAIL:</strong>
                <span>{user.email}</span>
                <br />
                <br />

                <strong>CONTACT:</strong>
                <span>{user.contact}</span>
                <br />
                <br />

                <strong>NAME:</strong>
                <span>{user.name}</span>
                <br />
                <br />
            </div>
            <Link to={'/'}><button>Go to back</button></Link>
        </div>
    );
};

export default View;