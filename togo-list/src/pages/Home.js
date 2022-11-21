import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [data, setdata] = useState({});
    useEffect(() => {
        db.child('contact').on('value', (shapshot) => {
            if (shapshot.val() !== null) {
                setdata({ ...shapshot.val() })
            } else {
                setdata({})
            }
        })
        return ()=>{
            setdata({})
        }
    },[])


    const onDelete = (id) => {
        if (window.confirm('are you sure?')) {
            db.child(`/contact/${id}`).remove((error) => {
                if (error) {
                    toast.error('error')
                } else {
                    toast.success('contact deleted successfully')
                }
            })
        }
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No.</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <Link to={`/update/${id}`}><button>Edit</button></Link>
                                    <button onClick={() => onDelete(id)}>Delete</button>
                                    <Link to={`/view/${id}`}> <button>View</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default Home;