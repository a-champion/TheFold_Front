import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditPost = (props) => {
    let [editPostTitle, setEditPostTitle] = useState();
    let [editPostURL, setEditPostURL] = useState();
    let [editPostBody, setEditPostBody] = useState();
    let [editPostBy, setEditPostBy] = useState();
    let [editSwitch, setEditSwitch] = useState(false);
    let [post, setPost] = useState();

    const handleEditPostTitleChange = (event) => {
        setEditPostTitle(event.target.value);
    }
    const handleEditPostURLChange = (event) => {
        setEditPostURL(event.target.value);
    }
    const handleEditPostBodyChange = (event) => {
        setEditPostBody(event.target.value);
    }
    const handleEditPostByChange = (event) => {
        setEditPostBy(event.target.value);
    }

    const handleEditPostForm = (event, postData) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/posts/${postData.id}`, {
            title: editPostTitle,
            contentURL: editPostURL,
            body: editPostBody,
            postedBy: editPostBy,
        }).then(() => {
            axios.get('http://localhost:8080/posts').then((response) => {
            });
        });
        props.toggleSwitch();
        setEditSwitch(!editSwitch);
    }

    const handleToggle = () => {
        setEditSwitch(!editSwitch);
    }

    useEffect(() => {

    }, [])
    
    return (
        <div className='editForm'>
            <Button onClick={handleToggle}>Edit</Button>
            {editSwitch ? 
                <Form onSubmit={(event) => {handleEditPostForm(event, props.post)}}>
                <Form.Group className="mb-3" controlId="formAddAnimal">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Post Title" onChange={handleEditPostTitleChange}/>
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
    
                  <Form.Group>
                  <Form.Label>URL</Form.Label>
                  <Form.Control type="text" placeholder="Video URL" onChange={handleEditPostURLChange}/>
                  </Form.Group>
    
                  <Form.Group>
                  <Form.Label>Body</Form.Label>
                  <Form.Control type="text" placeholder="Body Content" onChange={handleEditPostBodyChange}/>
                  </Form.Group>
    
                  <Form.Group>
                  <Form.Label>Posted by</Form.Label>
                  <Form.Control type="text" placeholder="user who posted" onChange={handleEditPostByChange}/>
                  </Form.Group><br/>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
        :<></>}
        </div>
    )
}

export default EditPost