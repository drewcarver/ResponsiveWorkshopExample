import React from 'react';
import { Select } from '@material-ui/core';
import './App.sass';
import 'font-awesome/css/font-awesome.min.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <nav className="navigation">
          <h1 className="navigation__logo">Z Bank</h1>
          <i className="fa fa-envelope navigation__messages" />
          <i className="fa fa-bell navigation__alerts" />
          <div className="account-menu">
            <p>David Guillermo</p>
            <i className="fa fa-angle-down account-menu__arrow-icon" />
          </div>
        </nav>
        <div className="account-information">
          <div className="account-information__current-balance">
            <p className="account-information__current-balance-title">
              Current account
            </p>
            <div className="account-information__amount">
              <h1 className="account-information__dollar-amount">$ 270 651</h1>
              <p className="account-information__cents-amount">.42</p>
            </div>
          </div>
          <button className="account-information__make-payment-button">
            Make a payment
          </button>
          <button className="account-information__requisites-button">
            Requisites
          </button>
          <button className="account-information__tasks-button">
            <div className="account-information__outcome-dot" />3 tasks in the
            amount of $910
          </button>
        </div>
      </header>
      <main className="payments">
        <div className="payments__header">
          <h1>
            Payments
            <button className="payments__week-menu">
              last week
              <i className="fa fa-angle-down payments__arrow" />
            </button>
          </h1>
          <div className="payments__summary-info">
            <div className="summary-info__income">
              <p className="summary-info__income-label">Income</p>
              <strong className="summary-info__income-amount">$ 255 007</strong>
            </div>
            <div className="summary-info__outcome">
              <p className="summary-info__outcome-label">Outcome</p>
              <strong className="summary-info__outcome-amount">$ 5 359</strong>
            </div>
            <button className="payments__show-analytics-menu">
              <i className="fa fa-angle-down payments__show-analytics-menu-arrow" />
              Show analytics
            </button>
          </div>
        </div>
        <div className="payments-list">
          <div className="payments-list__filter-bar">
            <div className="payments-list__legend">
              <button className="payments-list__payment-type-button">
                <strong className="payments-list__payment-type-label">
                  All
                </strong>
                <span className="payments-list__payment-type-count">145</span>
              </button>
              <button className="payments-list__payment-type-button">
                <div className="payments-list__income-dot" />
                <strong className="payments-list__payment-type-label">
                  Income
                </strong>
                <span className="payments-list__payment-type-count">95</span>
              </button>
              <button className="payments-list__payment-type-button">
                <div className="payments-list__outcome-dot" />
                <strong className="payments-list__payment-type-label">
                  Outcome
                </strong>
                <span className="payments-list__payment-type-count">44</span>
              </button>
              <button className="payments-list__payment-type-button">
                <div className="payments-list__income-dot" />
                <strong className="payments-list__payment-type-label">
                  For signature
                </strong>
                <span className="payments-list__payment-type-count">1</span>
              </button>
              <div className="payments-list__search-container">
                <i className="fa fa-search payments-list__search-icon" />
                <input placeholder="Search" className="payments-list__search" />
              </div>
            </div>
          </div>
          <div className="payments-list__date">Today, monday</div>
          <div className="payments-list__payment-row">
            <div className="payment-row__information">
              <strong className="payment-row__title">Wonder Pizza Guys</strong>
              <p className="payment-row__description">
                Payment at the pizzeria "Wonder Pizza Guys"
              </p>
            </div>
            <div className="payment-row__financial-information">
              <p className="payment-row__negative-amount">- $ 189</p>
              <div className="payment-row__actions">
                <button className="payment-row__sign-button">Sign</button>
              </div>
              <button className="payments__show-analytics-menu">
                More
                <i className="fa fa-angle-down payments__arrow" />
              </button>
            </div>
          </div>
          <div className="payments-list__payment-row">
            <div className="payment-row__information">
              <strong className="payment-row__title">
                Another Company Inc.
              </strong>
              <p className="payment-row__description">
                Warehouse rental for May.
              </p>
            </div>
            <div className="payment-row__financial-information">
              <p className="payment-row__positive-amount">+ $ 900</p>
              <div className="payment-row__actions">
                <div className="payment-row__income-label">Income</div>
              </div>
              <button className="payments__show-analytics-menu">
                More
                <i className="fa fa-angle-down payments__arrow" />
              </button>
            </div>
          </div>
          <div className="payments-list__payment-row">
            <div className="payment-row__information">
              <strong className="payment-row__title">
                Global Little Things LLS
              </strong>
              <p className="payment-row__description">
                Withdrawl of personal funds.
              </p>
            </div>
            <div className="payment-row__financial-information">
              <p className="payment-row__negative-amount">- $ 1 187</p>
              <div className="payment-row__actions">
                <div className="payment-row__outcome-label">Outcome</div>
              </div>
              <button className="payments__show-analytics-menu">
                More
                <i className="fa fa-angle-down payments__arrow" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
