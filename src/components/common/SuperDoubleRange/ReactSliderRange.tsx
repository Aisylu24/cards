import React from 'react';
import ReactSlider from "react-slider";
import s from "./ReactSliderRange.module.css"

type PropsType = {
    max: number
    setMax: (max: number) => void
    min: number
    setMin: (max: number) => void
}

export const ReactSliderRange: React.FC<PropsType> = (
    {
        min,
        max,
        setMin,
        setMax
    }
    ) => {
    return (
        <div className={s.container}>

            <ReactSlider defaultValue={[min, max]}
                         className={s.slider}
                         trackClassName={s.tracker}
                         min={0}
                         max={500}
                         minDistance={50}
                         step={50}
                         withTracks={true}
                         pearling={true}
                         renderThumb={(props) => {
                             return <div {...props} className={s.thumb}></div>
                         }}
                         onChange={([min, max]) => {
                             setMin(min)
                             setMax(max)
                         }}
            />

            <div className={s.valuesWrapper}>
                <p>
                    Min Value:
                    <span>{min}</span>
                </p>
                <p>
                    Max Value:
                    <span>{max}</span>
                </p>
            </div>
        </div>
    );
};

