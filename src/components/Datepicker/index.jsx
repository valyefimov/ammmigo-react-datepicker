import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';

function Datepicker() {
  return (
    <div className="header_component">
      <div className="container-2 z-1">
        <div className="page-padding">
          <div className="header_layout">
            <div className="header_title-wrapper">
              <h1 className="header_title-mobile">Analytics</h1>
            </div>
            <div className="header_dropdown-wrapper is-in-nav">
              <div
                data-hover="false"
                data-delay={0}
                id="w-node-_50e2ef86-555b-d26b-5be7-ca8e5be1ec28-318c2b43"
                className="dropdown_component is-in-nav w-dropdown"
                style={{ zIndex: 901 }}
              >
                <div
                  className="dropdown_toggle w-dropdown-toggle w--open"
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded="true"
                  role="button"
                  tabIndex={0}
                >
                  <div className="dropdown_overlay is-fullscreen" style={{ display: 'block' }} />
                  <div className="dropdown_toggle-content is-in-nav">
                    <div>Last 7 days</div>
                    <div className="dropdown_chevron w-icon-dropdown-toggle" aria-hidden="true" />
                  </div>
                </div>
                <nav
                  className="dropdown_list is-calendar w-dropdown-list w--open"
                  id="w-dropdown-list-0"
                  aria-labelledby="w-dropdown-toggle-0"
                >
                  <div className="calendar_component">
                    <Sidebar />
                    <div className="calendar_wrapper">
                      <Header />
                      <div className="calendar_day-wrapper">
                        <div className="calendar_day-label">Su</div>
                        <div className="calendar_day-label">Mo</div>
                        <div className="calendar_day-label">Tu</div>
                        <div className="calendar_day-label">We</div>
                        <div className="calendar_day-label">Th</div>
                        <div className="calendar_day-label">Fr</div>
                        <div className="calendar_day-label">Sa</div>
                        <div className="calendar_whitespace-start" />
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>1</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>2</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>3</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>4</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>5</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>6</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>7</div>
                        </a>
                        <a href className="icon-button is-active w-inline-block" tabIndex={0}>
                          <div>8</div>
                        </a>
                        <a href className="icon-button is-between is-first w-inline-block" tabIndex={0}>
                          <div>9</div>
                        </a>
                        <a href className="icon-button is-between w-inline-block" tabIndex={0}>
                          <div>10</div>
                        </a>
                        <a href className="icon-button is-between w-inline-block" tabIndex={0}>
                          <div>11</div>
                        </a>
                        <a href className="icon-button is-between w-inline-block" tabIndex={0}>
                          <div>12</div>
                        </a>
                        <a href className="icon-button is-between w-inline-block" tabIndex={0}>
                          <div>13</div>
                        </a>
                        <a href className="icon-button is-between is-last w-inline-block" tabIndex={0}>
                          <div>14</div>
                        </a>
                        <a href className="icon-button is-active w-inline-block" tabIndex={0}>
                          <div>15</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>16</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>17</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>18</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>19</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>20</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>21</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>22</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>23</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>24</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>25</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>26</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>27</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>28</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>29</div>
                        </a>
                        <a href className="icon-button w-inline-block" tabIndex={0}>
                          <div>30</div>
                        </a>
                      </div>
                      <div className="calendar_range-wrapper">
                        <div className="text-style-muted text-size-tiny">
                          Apr 08, 2022&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;Apr 15, 2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <Footer />
                </nav>
              </div>
            </div>
          </div>
          <div className="header_divider">
            <div className="header_divider-before" />
            <div className="header_divider-after" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datepicker;
