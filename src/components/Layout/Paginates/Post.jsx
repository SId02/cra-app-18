
const Post = ({ post }) => {
  return (
    <li
      className="box p-4 mb-3"
      style={{
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
        transition: "all 0.2s ease-in-out",
        background: "#ffffff",
        listStyle: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.borderColor = "#3273dc";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.02)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
    >
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div className="is-flex is-align-items-center mb-2">
              <span className="tag is-info is-light is-rounded has-text-weight-semibold mr-2">
                #{post.id}
              </span>
              <strong className="is-size-6 has-text-dark">{post.title}</strong>
            </div>
            <p
              className="is-size-7 has-text-grey"
              style={{ lineHeight: "1.6" }}
            >
              {post.body}
            </p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Post;