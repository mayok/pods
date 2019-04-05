import React, { useCallback, useEffect, useRef } from 'react';
import * as actions from '../reducers';
import { useDispatch } from './app';

type Props = {
  shortname: string;
};

const Thumbnail = ({ shortname }: Props) => {
  const dispatch = useDispatch();
  const onClickSelect = useCallback(name => dispatch(actions.select(name)), []);
  const imgEl = useRef({} as HTMLImageElement);

  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // set font
    ctx.font = "15px Arial";
    ctx.fillText(shortname, canvas.height / 2, canvas.width / 2);
    const data = canvas.toDataURL('image/png');

    imgEl.current.src = data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div onClick={() => onClickSelect(shortname)}>
      <img ref={imgEl} />
    </div>
  );
};

export default Thumbnail;
