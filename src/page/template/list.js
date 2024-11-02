import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

import { urlTemplateMapping } from '../../_common/url_endpoint'

function TemplateList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(urlTemplateMapping.list)
            .then((response) => response.json())
            .then((data) => {
                setData(data.list);
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
                Template List Page
                <div className="mt-1">
                    <table className="tbl tbl-border txt-center">
                        <thead>
                            <tr>
                                <th>num</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.num}</td>
                                <td>
                                    <Link to={`/template/detail/${item.num}`}>{item.name}</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TemplateList;
