import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {urlTemplateMapping} from "../../_common/url_endpoint";

function TemplateDetail() {
    const { num } = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`${urlTemplateMapping.one}/${num}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "num": num }), // text를 JSON 형식으로 변환
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>

                </ul>
            </nav>

            <div>
                Template Detail Page :: {num}
                <div className="mt-1">
                    <table className="tbl tbl-border txt-center">
                        <thead>
                        <tr>
                            <th>num</th>
                            <th>name</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {data.num}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TemplateDetail;
