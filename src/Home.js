import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "first blog", body: "body 1", author: "tia", id: 1},
        {title: "second blog", body: "body 2", author: "tia", id: 2},
        {title: "third blog", body: "body 3", author: "mario", id: 3},
    ]);

    return (
        <div clasName = "home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p> 
                </div>
            ))}
        </div>
    );
}

export default Home;