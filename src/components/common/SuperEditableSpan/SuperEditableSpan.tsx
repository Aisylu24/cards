import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState, KeyboardEvent} from 'react'
import SuperInputText from './../SuperInputText/SuperInputText'
import s from "./SuperEditableSpan.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,
        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
            setEditMode(!editMode)

        onEnter && onEnter()
    }

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(!editMode)

        onBlur && onBlur(e)
    }

    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(!editMode)

        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${s.span} ${className}`

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >

                        {children || restProps.value}
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
