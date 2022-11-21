import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './../Firebase';
const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const state = { name, email, contact };
    const { id } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("please provide value into each input");
        } else {
            if (!id) {
                db.child('contact').push(state, (error) => {
                    if (error) {
                        toast.error('error')
                    } else {
                        toast.success('contact successfully added')
                    }
                })
            }else{
                db.child(`contact/${id}`).set(state,(error)=>{
                    if (error) {
                        toast.error('error')
                    }else{
                        toast.success('contact updated successfully ')
                    }
                })
            }
        }
    }
    return (
        <div style={{ marginTop: "100px "}}>
            <form onSubmit={handleSubmit} style={{ margin: 'auto', display:'flex' }}>
                <label htmlFor='name'>name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id='name' type={'text'} placeholder="name" name='name'></input>
                <label htmlFor='email'>email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' type={'email'} placeholder="email" name='email'></input>
                <label htmlFor='contact'>contact</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} id='contact' type={'contact'} placeholder="contact" name='contact'></input>
                <input type={"submit"} value={id ? "update" : "save"}></input>
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddContact;