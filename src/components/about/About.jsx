import "./about.scss";
import sabbir from "../../assets/sabbir.png";

const About = () => {
  return (
    <div className="about">
      <div className="header">
        About <span>Me</span>
      </div>
      <div className="box">
        <img src={sabbir} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias omnis
          eligendi ex aut rerum, rem tenetur error quaerat optio molestias at
          odio quasi magnam obcaecati nesciunt sunt neque consequuntur quidem
          vero corrupti, deleniti accusantium non voluptate! Dolores laborum,
          quo accusamus beatae incidunt eum ratione dignissimos deserunt maiores
          voluptas placeat asperiores! Id, unde voluptates, velit dignissimos
          officia tempore fugit suscipit corrupti excepturi facilis libero ad
          odit molestias harum possimus sequi cupiditate beatae reprehenderit
          ipsum iste. Reiciendis dolor laborum modi eum perferendis tempore
          rerum, hic ullam deleniti autem suscipit obcaecati sit? Molestiae et
          nihil eveniet beatae alias, aperiam laborum iste saepe distinctio.
        </p>
      </div>
    </div>
  );
};

export default About;
