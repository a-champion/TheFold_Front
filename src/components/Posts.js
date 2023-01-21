import React from 'react';
import axios from 'axios';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Posts = (props) => {

    const handleDelete = (post) => {
        console.log(post);
        axios.delete(`https://the-fold-api.herokuapp.com/posts/${post.id}`)
        .then(() => {
            axios.get('https://the-fold-api.herokuapp.com/posts').then((response) => {
                console.log(response);
                props.toggleSwitch();
            });
        });
    }

    const expandPost = (post) => {
        
    }

    return (
    <>
    {props.posts.map((onePost, index) => {
        return (
            <>{}
                <div className="duel" key={index}>
                    <Card className='mb-3 blogPost' style={{width: '18rem', color: '#000', marginBottom: 15, marginLeft: '13vw'}} key={onePost.id}>
                        <Card.Body>
                            <Card.Title>
                                {onePost.title}
                            </Card.Title>
                            <div className='ratio ratio-16x9'>
                                <iframe src={"https://www.youtube.com/embed/"+`${onePost.contentURL}`} title="youtube video" allowFullScreen></iframe>
                            </div>

                            <Card.Text>
                                {onePost.body}
                            </Card.Text>
                            <Card.Subtitle>
                                {onePost.postedBy}
                            </Card.Subtitle>
                            <EditPost post={onePost} toggleSwitch={props.toggleSwitch} callback={props.callback}/>
                            <Button variant="danger" onClick={(event) => {handleDelete(onePost)}}>Delete</Button><br/>
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