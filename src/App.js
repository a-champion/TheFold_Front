import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Posts from './components/Posts';
// import BasicPosts from './components/BasicPosts';
// import AddForm from './components/AddForm';
// import NewPost from './components/NewPost';
import Form from 'react-bootstrap/Form';


 const App = () => {
  let [posts, setPosts] = useState([]);
  let [newPostTitle, setNewPostTitle] = useState('');
  let [newPostURL, setNewPostURL] = useState('');
  let [newPostBody, setNewPostBody] = useState('');
  let [newPostBy, setNewPostBy] = useState('');
  // switch
  let [addPostSwitch, setAddPostSwitch] = useState(false);
  let [toggleSwitch, setToggleSwitch] = useState(false);

  const formSwitch = () => {
    setAddPostSwitch(!addPostSwitch);
  }

  const tossACointToYourSwitcher = () => {
    setToggleSwitch(!toggleSwitch);
  }

  const handleNewPostTitle = (event) => {
    setNewPostTitle(event.target.value);
  }

  const handleNewPostURL = (event) => {
      setNewPostURL(event.target.value);
  }

  const handleNewPostBody = (event) => {
      setNewPostBody(event.target.value);
  }

  const handleNewPostBy = (event) => {
      setNewPostBy(event.target.value);
  }

  const handleNewPost = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/posts', {
        title: newPostTitle,
        contentURL: newPostURL,
        body: newPostBody,
        postedBy: newPostBy,
    }).then(() => {
        axios
        .get('http://localhost:8080/posts')
        .then((response) => {
            console.log(response.data);
        })
    });
    tossACointToYourSwitcher();
    formSwitch();
  }

  const getPosts = () => {
    axios
    .get('http://localhost:8080/posts')
    .then((response) => setPosts(response.data), (err) => console.log(err))
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getPosts();
  }, [addPostSwitch, toggleSwitch])

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Fold</h1>
        
      
        <Button onClick={formSwitch} className="addNewPost">post</Button>
        {addPostSwitch ?
          <Form onSubmit={(handleNewPost)}>
            <Form.Group className="mb-3" controlId="formAddAnimal">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Post Title" onChange={handleNewPostTitle}/>
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="Video URL" onChange={handleNewPostURL}/>
              </Form.Group>

              <Form.Group>
              <Form.Label>Body</Form.Label>
              <Form.Control type="text" placeholder="Body Content" onChange={handleNewPostBody}/>
              </Form.Group>

              <Form.Group>
              <Form.Label>Posted by</Form.Label>
              <Form.Control type="text" placeholder="user who posted" onChange={handleNewPostBy}/>
              </Form.Group><br/>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>: <></>}
          <br/>
          
        <div className="flex">
          <Posts posts={posts} toggleSwitch={tossACointToYourSwitcher} callback={[handleNewPostTitle, handleNewPostURL, handleNewPostBody, handleNewPostBy, handleNewPost]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
