import { useState } from "react"
import BlogList from "../components/BlogList";

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        {title: "A blog about all kinds of stuff", body: "A blog of stuff", author: "frank", id: 1},
        {title: "A blog about data integrity", body: "A blog of data", author: "petter", id: 2},
        {title: "A blog about nothing", body: "A blog of nothing", author: "sally", id: 3},
    ]);


    return (
        <div className="HomePage">
            <BlogList />
        </div>
    )
} 

export default HomePage