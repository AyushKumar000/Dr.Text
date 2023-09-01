import React, { useState } from "react";

export default function AboutUs() {
    const [customStyle, setcustomStyle] = useState({
        color : "Black",
        backgroundColor : "#ADD8E6"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const handleClick = () => {
        if(customStyle.color === "Black"){
            setcustomStyle ({
                color: "White",
                backgroundColor : "Black"
            });
            setBtnText("Enable Light Mode");
        }
        else {
            setcustomStyle ({
                color: "Black",
                backgroundColor : "#ADD8E6"
            });
            setBtnText("Enable Dark Mode");
        }
    }

  return (
    <div style={customStyle}>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        assumenda voluptatem tempora dicta culpa perferendis beatae suscipit ab,
        corrupti fugit cumque voluptatibus porro nostrum et libero possimus quo
        itaque sint?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos
        soluta quidem, repudiandae, quis facere tempore ad voluptatum, minus
        nemo vitae nobis id. Quas, itaque. Impedit vitae neque porro
        dignissimos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        exercitationem perspiciatis quam saepe incidunt accusamus aliquid
        assumenda nisi nihil fugiat et at, corrupti voluptatum quia eligendi
        impedit? Perferendis, vitae culpa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus
        autem quia obcaecati nemo vel consequuntur dolorum odio explicabo
        voluptate error laborum officia porro laudantium quam, ea modi quibusdam
        corrupti.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        praesentium quidem dicta, animi ipsa sapiente aliquam architecto
        accusantium, assumenda quia nihil labore facilis sed reiciendis
        voluptates, debitis aut modi delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus
        autem quia obcaecati nemo vel consequuntur dolorum odio explicabo
        voluptate error laborum officia porro laudantium quam, ea modi quibusdam
        corrupti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus
        autem quia obcaecati nemo vel consequuntur dolorum odio explicabo
        voluptate error laborum officia porro laudantium quam, ea modi quibusdam
        corrupti.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        praesentium quidem dicta, animi ipsa sapiente aliquam architecto
        accusantium, assumenda quia nihil labore facilis sed reiciendis
        voluptates, debitis aut modi delectus.
      </p>
      <button type="button" className="btn btn-primary" onClick={handleClick}>{btnText}</button>
    </div>
  );
}
