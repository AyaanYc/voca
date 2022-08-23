import { useEffect, useState } from "react";

export default function Exam5() {
    const [ counter, setCounter ] = useState(0);
    const [ keyword, setKeyword ] = useState('aaa');

    // 실행횟수조절 실행조건설정
    useEffect(() => {
        if(keyword.length > 5) {
            console.log(`search for ${keyword}`);
        }
    }, [keyword]);
    
    function countUp() {
        setCounter( preVal => preVal = preVal + 1 );
    }
    function countDown() {
        setCounter( preVal => {
            if(preVal === 0){
                return 0;
            }
            return preVal = preVal - 1;
        });
        // if (counter > 0) {
        //     setCounter((val) => val - 1);
        // }
    }
    const onChangeText = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <div>
            <input 
                type="text"
                placeholder="Search here..."
                value= { keyword } 
                onChange={onChangeText}
            />
            <h1>{ counter }</h1>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </div>
    );
}