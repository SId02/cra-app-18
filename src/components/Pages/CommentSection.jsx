import  { useState } from 'react';

const CommentSection = () => {
	const [comment, setComment] = useState('');

	const handleCommentChange = (e) => {
	  setComment(e.target.value);
	};
  
	const handlePostComment = () => {
	  // Implement comment posting logic here
	  console.log('Posted comment:', comment);
	  setComment('');
	};
  
	return (
		<>
			<div>CommentSection</div>
			<div className="container">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="Profile" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea 
                className="textarea" 
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button 
                className="button is-primary"
                onClick={handlePostComment}
              >
                Post comment
              </button>
            </p>
          </div>
        </div>
      </article>

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="Barbara" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Sean" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Kayli" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Kayli Eunice</strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>
		</>
	);
};

export default CommentSection;
