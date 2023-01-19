import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Comments() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const response = await fetch('/api/comments');

        if (response.ok) {
            const comments = await response.json();
            setComments(comments);
        }
    }
    const postComments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=> {
        fetchComments();
    },[])
    return (
        <Container>
            <button onClick={fetchComments}>GET COMMENT</button>
            <div>
                <input 
                    type="text"
                    placeholder={'...'}
                    value={comment}
                    onChange={((e) => setComment(e.target.value))}
                 />
                <button onClick={postComments}>POST COMMENT</button>
            </div>
            {comments.map((comment:any) => {
                return (
                    <div className="comment">{comment.id} / {comment.text}</div>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  button {
    font-size: 18px;
    padding: 4.5px 8px;
    cursor: pointer;
    width: 400px;
  }
  div {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    input {
        width: 100%;
        outline: none;
        font-size: 18px;
        padding: 4px 10px;
    }
    button {
        width: 100%;
    }
  }
  .comment {
    font-size: 20px;
    color: var(--tx-main);
    margin-top: 24px;
  }
`