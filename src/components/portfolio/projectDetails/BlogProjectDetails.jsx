import blog1 from "../../../assets/blog/blog1.png";
import blog2 from "../../../assets/blog/blog2.png";
import blog3 from "../../../assets/blog/blog3.png";
import blog4 from "../../../assets/blog/blog4.png";
import blog5 from "../../../assets/blog/blog5.png";
import "./projectDetails.scss";

const BlogProjectDetails = () => {
  return (
    <div className="blog-container">
      <div className="image-container">
        <div className="img">
          <img src={blog1} alt="Blog pic" />
        </div>
        <div className="img">
          <img src={blog2} alt="Blog pic" />
        </div>
        <div className="img bind-image">
          <img src={blog3} alt="Blog pic" />
          <img src={blog4} alt="Blog pic" />
        </div>
        <div className="img">
          <img src={blog5} alt="Blog pic" />
        </div>
      </div>
    </div>
  );
};

export default BlogProjectDetails;
