import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { urlTemplateMapping } from '../../_common/url_endpoint'

function TemplateUpdate() {
    const [num, setNum] = useState('');
    const [name, setName] = useState('');

    const handleNumberChange = (event) => {
        setNum(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async () => {
        if(num === '' || num === 0 || name === '') {
            alert("값을 입력해주세요");
            return;
        }

        try {
            const response = await fetch(urlTemplateMapping.update, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "num": num,
                    "name": name
                }), // text를 JSON 형식으로 변환
            });

            if (response.ok) {
                const result = await response.json();
                console.log('서버 응답:', result);
                alert('데이터가 성공적으로 수정되었습니다!');

                setNum("0");
                setName("");
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
                Template Update Page
                <div className="mt-1">
                    <table className="tbl tbl-border txt-center">
                        <tbody>
                        <tr>
                            <th>num</th>
                            <td>
                                <input
                                    type="number"
                                    placeholder="숫자 입력"
                                    value={num}
                                    onChange={handleNumberChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>
                                <input
                                    type="text"
                                    placeholder="내용 입력"
                                    value={name}
                                    onChange={handleNameChange}
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

export default TemplateUpdate;
