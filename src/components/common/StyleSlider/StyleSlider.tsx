import React from 'react';
import s from "./StyleSliderComponent.module.css";
import ReactSlider from "react-slider"
import styled from 'styled-components'

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #FF69B4FF;
  color: #FFE4E1FF;
  border-radius: 50%;
  cursor: grab;
  top: -6px;
`;

const Thumb = (props: any, state: any) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>

const StyleSlider = () => {

    const StyledSlider = styled(ReactSlider)`width: 300px;
      height: 8px;`

    const StyledTrack = styled.div`
      top: 0;
      bottom: 0;
      background: ${(props: any) => (props.index === 2 ? '#FFE4E1FF' : props.index === 1 ? '#FF69B4FF' : '#FFE4E1FF')};
      border-radius: 999px;`

    const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index}/>;

    return (
        <div className={s.styledSlider}>
            <StyledSlider defaultValue={[0, 500]} renderTrack={Track} renderThumb={Thumb}/>
        </div>

    );
};

export default StyleSlider;

