import Button from "./Button";
import './Exam3.css';
import { useState } from "react";

export default function Exam3() {
    const [val, setVal ] = useState('버튼1');
    const btn1OnClick = () => setVal('Button1');
    return (
        <div>
            <Button text={val} color="red" onClick={btn1OnClick} />
            <Button text="버튼2" color="blue" />
            <Button text="버튼3" color="pink" />
        </div>
    );
}