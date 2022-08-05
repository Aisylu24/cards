import React, {useState} from 'react';
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperButton/SuperButton";
import StyleSlider from "../../common/StyleSlider/StyleSlider";
import SuperRange from "../../common/SuperRange/SuperRange";
import SuperSelect from "../../common/SuperSelect/SuperSelect";
import SuperRadio from "../../common/SuperRadio/SuperRadio";
import SuperEditableSpan from "../../common/SuperEditableSpan/SuperEditableSpan";
import {ReactSliderRange} from "../../common/SuperDoubleRange/ReactSliderRange";

const Test = () => {
    const [value1, setValue1] = useState(0)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)

    const arr = ['x', 'y', 'z']

    const [option, onChangeOption] = useState(arr[1])

    const [editableSpanText, setEditableSpanText] = useState<string>('')

    return (
        <div>
            <div><SuperInputText/></div>
            <div><SuperCheckbox/></div>
            <div><SuperButton>Button</SuperButton></div>
            <div><StyleSlider/></div>
            <div><SuperRange value={value1} onChangeRange={setValue1}/></div>
            <div><ReactSliderRange min={min} max={max} setMax={setMin} setMin={setMax}/></div>
            <div><SuperSelect value={option} options={arr} onChangeOption={onChangeOption}/></div>
            <div><SuperRadio name={'radio'} value={option} options={arr} onChangeOption={onChangeOption} /></div>
            <div><SuperEditableSpan value={editableSpanText}
                                    onChangeText={setEditableSpanText}
                                    spanProps={{children: editableSpanText ? undefined : 'Enter your text...'}}
            /></div>
        </div>
    );
};

export default Test;