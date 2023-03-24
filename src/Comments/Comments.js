import { useEffect } from "react";
import { useState } from "react";
import { getComments as getCommentsApi,
   createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi} from '../api'
    import Comment from './Comment'   
import CommentForm from './CommentForm'



const Comments = ({currentUserId, movieDataFromDB, sendUpdateComments}) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null)

  const rootComments = backendComments?.filter(
    (backendComments) => backendComments?.parentId === null)
  console.log('backendcomments', backendComments);

  const getReplies = commentId => {
    return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a,b)=>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }
  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    createCommentApi(text, parentId).then(comment =>
      setBackendComments([comment, ...backendComments]))
      setActiveComment(null)
  }
  const deleteComment =(commentId) => {
    if(window.confirm('Are you sure that you want to remove comment?')){
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
        setActiveComment(null);
      })
    }
  }
  const updateComment= (text, commentId) => {
    updateCommentApi(text, commentId).then(()=> {
        const updatedBackendComments = backendComments.map(backendComment => {
          if(backendComment.id === commentId){
            return {...backendComment, body: text}
          }
          return backendComment;
        });
      setBackendComments(updatedBackendComments);
    })
  }

  useEffect(() => {
    console.log('looking for u',movieDataFromDB)
    getCommentsApi(movieDataFromDB).then(data => {
      setBackendComments(data);
    })
  })
  console.log(movieDataFromDB);
  return (
    <div className="comments">
      <h3 className='comments-title'>Comments</h3>
      {/* <div className='comment-form-title'>Write Comment</div> */}
      <CommentForm submitLabel="Post" handleSubmit={addComment} sendUpdateComments={sendUpdateComments}/>
      <div className="comments-container">
        {rootComments?.map((rootComment) => (
          <Comment 
            key={rootComment.id} 
            comment={rootComment} 
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            sendUpdateComment={sendUpdateComments}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            />
        ))}
      </div>

    </div>
  );
};

export default Comments;