import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    del?: boolean
    filter?:boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        filter,del, className,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${(del && s.delete) || (filter && s.filter && s.default) || s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
