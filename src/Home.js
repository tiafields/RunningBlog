import { useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "first blog", body: "body 1", author: "tia", id: 1},
        {title: "second blog", body: "body 2", author: "tia", id: 2},
        {title: "third blog", body: "body 3", author: "mario", id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs);
    }
    return (
        <div clasName = "home">
            <BlogList blogs = {blogs} title= "All Blogs" handleDelete={handleDelete}/>
            
        </div>
    );
}

export default Home;