const Post = ({ post }) => {
	return (
		<>
			<div className="container">
				<ul>
					<li className="box mt-3 mb-1 has-background-white">
						<article className="media">
							<div className="media-content">
								<div className="content">
									<p>
										<small className="has-text-grey-dark"> <span># {post.id}</span></small> &nbsp;
										<strong className="has-text-dark">{post.title}</strong>
										<br />&nbsp;
										<span className="has-text-grey-dark">{post.body}</span>
									</p>
								</div>
							</div>
						</article>
					</li>
				</ul>
			</div>
			
		</>
	);
};
export default Post;