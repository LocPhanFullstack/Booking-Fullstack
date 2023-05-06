import { useEffect, useState } from 'react';
import './UserManage.scss';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';

const UserManage = () => {
    const [arrUsers, setArrUsers] = useState([]);

    const getUser = async (id) => {
        let response = await getAllUsers(id);
        if (response && response.errCode === 0) {
            setArrUsers(response.users);
        }
    };

    useEffect(() => {
        getUser('ALL');
    }, []);

    return (
        <div className="users-container">
            <div className="title text-center">Manage users</div>
            <div className="users-table mt-3 mx-1">
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrUsers &&
                            arrUsers.map((item, i) => {
                                console.log('Check map: ', item, i);
                                return (
                                    <tr key={i}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2" style={{ width: '60px' }}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" style={{ width: '60px' }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
