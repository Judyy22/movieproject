import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const BoardWrite = () => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [movieTitle, setMovieTitle] = useState("");
    const dispatch = useDispatch();

    const addboard = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_CONTACT",
            payload: { name, content, movieTitle },
        });
    };

    return (
        <div>
            <div>
                <Form onSubmit={addboard} className="boardinputArea">
                    <div>
                        <div>이름</div>
                        <input
                            type="text"
                            placeholder="이름을 입력해주세요"
                            onChange={(event) => setName(event.target.value)}
                            className="medianame"
                        />
                    </div>

                    <div>
                        <div>영화제목</div>
                        <input
                            type="text"
                            placeholder="영화제목을 입력해주세요"
                            onChange={(event) =>
                                setMovieTitle(event.target.value)
                            }
                            className="mediatitle"
                        />
                    </div>
                    <div>
                        <div>내용</div>
                        <textarea
                            rows="2"
                            placeholder="내용을 입력해주세요"
                            onChange={(event) => setContent(event.target.value)}
                        />
                    </div>
                    <button className="boardwritebutton" type="submit">
                        추가
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default BoardWrite;
