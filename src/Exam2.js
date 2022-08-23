import { useState } from "react";

const Exam2 = () => {
    const [ counter, setCounter ] = useState(0);

    function countUp() {
        // setCounter(counter + 1 );
        setCounter( preVal => preVal + 1);
    }

    return (
        <div>
            <h1>{ counter }</h1>
            <button onClick={ countUp }>Click Me</button>
        </div>
      );
}

export default Exam2;

