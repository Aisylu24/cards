import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type,
        onChange, onChangeRange,
        className, value,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? s.className : ''}`

    return (
        <>
            <div className={s.value}>{value}</div>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps}
            />
        </>
    )
}

export default SuperRange
