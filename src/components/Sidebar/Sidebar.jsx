import React from 'react';
import './Sidebar.css';
import ohmLogo from '../../images/olympus.png';
import Discord from '../../images/discord.png';
import Twitter from '../../images/twitter.png';
import Medium from '../../images/medium.png';
import Github from '../../images/github.png';

import Wrap from '../../images/wrap.png';
import Bridge from '../../images/bridge.png';
import Forum from '../../images/forum.png';
import Govern from '../../images/govern.png';
import Docs from '../../images/docs.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <a className="ohm-container" href="https://www.olympusdao.finance/">
        <img src={ohmLogo} className="ohm-logo" alt="olympus logo" />
        <h4 className="ohm-title">Olympus</h4>
      </a>
      <div className="utility-container">
        <div className="utility-item">
          <span>
            <img src={Wrap} alt="wrap logo" className="util-logo" />
          </span>
          <h6>Wrap</h6>
        </div>
        <div className="utility-item">
          <span>
            <img src={Bridge} alt="bridge logo" className="util-logo" />
          </span>
          <h6>Bridge</h6>
        </div>
      </div>
      <div className="utility-container">
        <div className="utility-item">
          <span>
            <img src={Forum} alt="forum logo" className="util-logo" />
          </span>
          <h6>Forum</h6>
        </div>
        <div className="utility-item">
          <span>
            <img src={Govern} alt="govern logo" className="util-logo" />
          </span>
          <h6>Governance</h6>
        </div>
        <div className="utility-item">
          <span>
            <img src={Docs} alt="docs logo" className="util-logo" />
          </span>
          <h6>Docs</h6>
        </div>
      </div>
      <div className="social-container">
        <img src={Github} className="social-logo" alt="discord logo" />
        <img src={Medium} className="social-logo" alt="medium logo" />
        <img src={Twitter} className="social-logo" alt="twitter logo" />
        <img src={Discord} className="social-logo" alt="discord logo" />
      </div>
    </div>
  );
}

export default Sidebar;
