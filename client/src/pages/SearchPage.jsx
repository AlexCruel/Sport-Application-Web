import React from 'react';
import { useState } from 'react';
import {useHttp} from '../hook/http.hook';
import { useMessage } from '../hook/message.hook';

export const SearchPage = () => {
    
    const {request, error} = useHttp();

    const clickHandler = async () => {
        try {
            const data = await request('api/search/test', 'GET');
            console.log(data);
        } catch(e) {}
    }

    return (
        <div>
            <h1>Search Page</h1>

            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />

            <a onClick={clickHandler} id="btn" name="btn" className="waves-effect waves-light btn">button</a>

            <table className="striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>J</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jo</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jona</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jonath</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jonatha</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}