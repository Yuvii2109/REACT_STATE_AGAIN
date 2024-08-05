// Comments.jsx code 

import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm"

export default function Comments(){
    let [comments,setComments] = useState([{
        username: "yuvii2109",
        comment: "This is a comment",
        rating: 5
    }]);
    let addNewComment = (comment) => {
        setComments((prevComments) =>
            [...prevComments, comment]);
    };
    return(
        <div>
            <h1><u><i>Comments</i></u></h1>
            {comments.map((comment,index)=>(
                <div className="comments" key={index}>
                    <span>
                        <i>" {comment.comment} "</i>
                    </span>
                    <br />
                    <span>
                        <b><u><i>Rating -</i></u></b> &nbsp;{comment.rating}/5
                    </span>
                    <br />
                    <span>
                        <b><u><i>Posted by -</i></u></b> &nbsp;{comment.username}
                    </span>
                </div>
            ))}
            <br /> <br />
            <hr /> <hr />
            <CommentsForm addNewComment = {addNewComment}/>
        </div>
    )
}