import React from 'react';
import axios from 'axios';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaMinus } from "react-icons/fa";



const Posts = (props) => {

    const handleDelete = (post) => {
        console.log(post);
        axios.delete(`http://localhost:8080/posts/${post.id}`)
        .then(() => {
            axios.get('http://localhost:8080/posts').then((response) => {
                console.log(response);
                props.toggleSwitch();
            });
        });
    }

    return (
    <>
    {props.posts.map((onePost, index) => {
        return (
            <>
                <div className="duel" key={onePost.id}>
                    <Card className="mb-3" style={{width: '18rem', color: '#000', marginBottom: 15, marginLeft: '13vw'}}>
                        <Card.Body>
                            <Card.Title>
                                {onePost.title}
                            </Card.Title>

                            <Card.Text>
                                {onePost.body}
                            </Card.Text>
                            <Card.Subtitle>
                                {onePost.postedBy}
                            </Card.Subtitle>
                            <EditPost post={onePost} toggleSwitch={props.toggleSwitch} callback={props.callback}/>
                            <Button variant="danger" onClick={(event) => {handleDelete(onePost)}}>Delete</Button><br/>
                            <FaMinus />
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    })}
    </>
  );
}

export default Posts;