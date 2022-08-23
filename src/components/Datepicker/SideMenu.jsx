import React, { useState } from 'react';
import classNames from 'classnames';

import style from './SideMenu.module.css';
import TickIcon from './Icons/TickIcon';

const SideMenu = () => {
  const [selected, setSelected] = useState();
  const buttons = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Custom'];

  return (
    <div className={style.SideMenu}>
      {buttons.map((name) => (
        <button
          type="button"
          key={name}
          onClick={() => setSelected(name)}
          className={classNames(style.Button, { [style.ButtonActive]: name === selected })}
        >
          {name}
          <TickIcon />
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
