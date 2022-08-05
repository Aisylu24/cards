import React from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRangeMin: (value1: number) => void
    onChangeRangeMax: (value2: number) => void
    value?: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRangeMin,onChangeRangeMax, value,
        ...restProps
    }
) => {

     let finalRangeClassName = `${s.range} `
    return (
        <div className={s.container} >
            <input
                type={'range'}
                onChange={(e) =>{ onChangeRangeMin(+e.currentTarget.value)}}
               className={finalRangeClassName}

                {...restProps}
            />
            <input
                type={'range'}
                onChange={(e)=>onChangeRangeMax(+e.currentTarget.value)}
               className={finalRangeClassName}

                {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange
