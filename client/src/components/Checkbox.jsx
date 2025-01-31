import { GoCheck } from "react-icons/go";

export default function Checkbox({value,text}){
    return (
        <label className='check_box'>
            <div className='check'><input type="checkbox"  value={value} />
                <div><GoCheck /></div>
            </div>
            {text}
        </label>
    );
}