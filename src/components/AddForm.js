import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddForm = (props) => {
    const [post, setPost] = useState([]);

    const handleChange = (event) => {
        setPost({...post, [event.target.title]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(post)
    }
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Video Title" value={post.title} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formURL">
                <Form.Label>ContentURL</Form.Label>
                <Form.Control type="text" placeholder="ContentURL" value={post.contentURL} onChange={handleChange} />
                <Form.Text className="text-muted">URL from youtube only
                </Form.Text>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
             <Form.Group className="mb-3" controlId="formBody">
                <Form.Label>Body</Form.Label>
                <Form.Control type="text" placeholder="" value={post.body} onChange={handleChange} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default AddForm