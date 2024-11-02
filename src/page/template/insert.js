import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { urlTemplateMapping } from '../../_common/url_endpoint'

function TemplateInsert() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        if(text === '') {
            alert("값을 입력해주세요");
            return;
        }

        try {
            const response = await fetch(urlTemplateMapping.insert, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "name": text }), // text를 JSON 형식으로 변환
            });

            if (response.ok) {
                const result = await response.json();
                console.log('서버 응답:', result);
                alert('데이터가 성공적으로 전송되었습니다!');

                setText('');
            } else {
                console.error('서버 오류:', response.statusText);
                alert('데이터 전송에 실패했습니다.');
            }
        } catch (error) {
            console.error('네트워크 오류:', error);
            alert('네트워크 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

            <div>
                Template Insert Page
                <div className="mt-1">
                    <table className="tbl tbl-border txt-center">
                        <tbody>
                        <tr>
                            <th>name</th>
                            <td>
                                <input
                                    type="text"
                                    placeholder="값 입력"
                                    value={text}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <button onClick={handleSubmit}>전송</button>
                </div>
            </div>
        </div>
    );
}

export default TemplateInsert;
