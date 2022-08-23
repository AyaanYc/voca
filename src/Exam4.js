import Button from "./Button";
import { useState } from "react";

export default function Exam4() {
    const [ val, setVal ] = useState(10);
    return (
        <div>
            <Button text="btn1" color="red" />
            <Button text={val} color="red" />
        </div>
    );
}