import React, {useState} from 'react';

const Counter = (props) => {
    
    const [likes, setLikes] = useState( Number(props.arg.initval) );

    function incLikes(){
        setLikes(likes+1);
    }
    function decLikes(){
        setLikes(likes-1);
    }
      

  return (
    <div>
      <h1>{props.arg.name} : {likes}</h1>
      <p>
        <button onClick={ incLikes }>Increment</button>
      </p>
      <p>
        <button onClick={ decLikes }>Decrement</button>
      </p>
    </div>
  );
};

export default Counter;