const Post = ({ post }) => {
	return (
		<>
			
			<ul>
				<li className="box mb-1 has-background-white">
					<article className="media">
						<figure className="media-left">
							<p className="image is-64x64">
								<img src="/images/person/1.jpg" className="is-rounded" />
							</p>
						</figure>
						<div className="media-content">
							<div className="content">
                                <p>
                                <small className="has-text-grey-dark">Post ID: {post.id}</small>
									<strong className="has-text-dark">{post.title}</strong>
									<br />
									<span className="has-text-grey-dark">
                                    {post.body}
									</span>
								</p>
							</div>
						</div>
					</article>
				</li>
			</ul>
		</>
	);
};
export default Post;
