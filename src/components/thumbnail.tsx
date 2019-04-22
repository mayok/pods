import * as H from 'history';
import React, { useCallback, useEffect, useRef } from 'react';
import * as actions from '../reducers';
import { useDispatch } from './app';

type Props = {
  history: H.History;
  group: string;
  shortname: string;
};

const Thumbnail = ({ group, shortname, history }: Props) => {
  const dispatch = useDispatch();
  const onClickSelect = useCallback((group, name) => dispatch(actions.select(group, name)), []);
  const imgEl = useRef({} as HTMLImageElement);

  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // set font
    // todo: cute
    ctx.font = '15px Arial';
    ctx.fillText(shortname, canvas.width / 2, canvas.height / 2);
    const data = canvas.toDataURL('image/png');

    imgEl.current.src = data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div
      onClick={() => {
        history.push(shortname);
        onClickSelect(group, shortname);
      }}
    >
      <img ref={imgEl} />
    </div>
  );
};

export default Thumbnail;
