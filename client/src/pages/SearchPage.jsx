import React from 'react';
import { useState } from 'react';
import {useHttp} from '../hook/http.hook';
import { useMessage } from '../hook/message.hook';

export const SearchPage = () => {
    
    const {request, error} = useHttp();

    const [form, setForm] = useState({ studID: '' });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    
    const [list, listRender] = useState();

    const clickHandler = async () => {
        try {
            const data = await request('api/search/test', 'POST', { ...form });

            listRender(data.map((item, index) => 
                <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.studID}</td>
                    <td>{item.fullName}</td>
                    <td>{item.facility}</td>
                    <td>{item.typeFacility}</td>
                    <td>{item.time}</td>
                </tr>
            ));
        } catch(e) {}
    }

    return (
        <div>
            <h1>Search Page</h1>

            <input onChange={changeHandler} name="studID" placeholder="Placeholder" id="first_name" type="text" className="validate" />

            <a onClick={clickHandler} id="btn" name="btn" className="waves-effect waves-light btn">button</a>

            <div style={{ minHeight: '427px', marginBottom: '40px' }}>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Студ ID</th>
                            <th>ФИО</th>
                            <th>Объект</th>
                            <th>Тип занятия</th>
                            <th>Часы</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
}