import React from "react";
import "../styles/nicepage.css";
import "../styles/more.css";
import min from "../images/-min.jpg";
import dfggg from "../images/dfggg-min.jpg";
import styled from "styled-components";

const ReadMore = () => {
  return (
    <Wrapper>
      <section
        className="u-clearfix u-palette-1-base u-section-1"
        id="carousel_5c67"
      >
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-xl u-sheet-1">
          <div
            id="carousel-8d1d"
            data-interval="5000"
            data-u-ride="carousel"
            className="u-carousel u-expanded-width u-slider u-slider-1"
          >
            <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
              <li
                data-u-target="#carousel-8d1d"
                className="u-active u-active-palette-3-base u-hover-palette-3-base u-palette-1-light-3 u-shape-circle"
                data-u-slide-to="0"
                style={{ width: "22px", height: "22px" }}
              ></li>
              <li
                data-u-target="#carousel-8d1d"
                className="u-active-palette-3-base u-hover-palette-3-base u-palette-1-light-3 u-shape-circle"
                data-u-slide-to="1"
                style={{ width: "22px", height: "22px" }}
              ></li>
            </ol>
            <div className="u-carousel-inner" role="listbox">
              <div className="u-active u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-1">
                  <div className="u-align-center-md u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-xl u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-radius-20 u-shape-round u-white u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <h3 className="u-text u-text-palette-1-base u-text-1">
                        Over 50 online programmes
                      </h3>
                      <p className="u-text u-text-2">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.&nbsp;Duis
                        aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.&nbsp;
                      </p>
                      <p className="u-text u-text-3">
                        Image from{" "}
                        <a className="u-active-none u-border-1 u-border-grey-75 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1">
                          Freepik
                        </a>
                      </p>
                    </div>
                  </div>
                  <img
                    src={min}
                    alt=""
                    className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-round u-radius-20 u-image-1"
                    data-image-width="1500"
                    data-image-height="1000"
                  />
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-expanded-width u-slide">
                <div className="u-container-layout u-container-layout-3">
                  <div className="u-align-center-md u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-xl u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-radius-20 u-shape-round u-white u-group-2">
                    <div className="u-container-layout u-valign-middle u-container-layout-4">
                      <h3 className="u-text u-text-palette-1-base u-text-4">
                        Weekend classNamees, 5 months duration
                      </h3>
                      <p className="u-text u-text-5">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.&nbsp;Duis
                        aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.&nbsp;
                      </p>
                      <p className="u-text u-text-6">
                        Image from{" "}
                        <a className="u-active-none u-border-1 u-border-grey-75 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-2">
                          Freepik
                        </a>
                      </p>
                    </div>
                  </div>
                  <img
                    src={dfggg}
                    alt=""
                    className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-round u-radius-20 u-image-2"
                    data-image-width="1980"
                    data-image-height="1367"
                  />
                </div>
              </div>
            </div>
            <a
              className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-spacing-5 u-text-body-alt-color u-carousel-control-1"
              href="#carousel-8d1d"
              role="button"
              data-u-slide="prev"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-spacing-5 u-text-body-alt-color u-carousel-control-2"
              href="#carousel-8d1d"
              role="button"
              data-u-slide="next"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <a className="u-align-center u-btn u-button-style u-hover-white u-palette-3-base u-btn-3">
            view all programms
          </a>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-expand-resize u-section-2"
        id="carousel_5e88"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-disable-padding u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-size-40 u-size-60-md">
                  <div className="u-layout-row">
                    <div className="u-size-20">
                      <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-opacity u-opacity-95 u-palette-3-base u-size-60 u-layout-cell-1">
                          <div className="u-container-layout u-valign-middle u-container-layout-1">
                            <h2 className="u-text u-text-1">
                              Training is everything
                            </h2>
                            <p className="u-text u-text-font u-text-2">
                              The paradox of education is precisely this - that
                              as one begins to become conscious one begins to
                              examine the society in which he is being educated.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-40">
                      <div className="u-layout-col">
                        <div className="u-size-30">
                          <div className="u-layout-row">
                            <div
                              className="u-align-left u-container-style u-image u-layout-cell u-similar-fill u-size-30 u-image-1"
                              imgwidth="1732"
                              imgheight="1696"
                            >
                              <div className="u-container-layout u-container-layout-2"></div>
                            </div>
                            <div
                              className="u-align-left u-container-style u-image u-layout-cell u-right-cell u-similar-fill u-size-30 u-image-2"
                              imgwidth="1867"
                              imgheight="1620"
                            >
                              <div className="u-container-layout u-container-layout-3"></div>
                            </div>
                          </div>
                        </div>
                        <div className="u-size-30">
                          <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-similar-fill u-size-30 u-layout-cell-4">
                              <div className="u-border-2 u-border-palette-3-base u-container-layout u-valign-middle u-container-layout-4">
                                <h1 className="u-align-center u-text u-text-palette-3-base u-text-3">
                                  Education is the key to success
                                </h1>
                              </div>
                            </div>
                            <div
                              className="u-align-left u-container-style u-expand-resize u-image u-layout-cell u-right-cell u-size-30 u-image-3"
                              imgwidth="700"
                              imgheight="546"
                            >
                              <div className="u-container-layout u-container-layout-5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-20 u-size-60-md">
                  <div className="u-layout-row">
                    <div
                      className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-4"
                      imgwidth="598"
                      imgheight="642"
                    >
                      <div className="u-container-layout u-valign-top u-container-layout-6"></div>
                    </div>
                    <div className="u-align-left u-container-style u-expand-resize u-layout-cell u-palette-2-base u-right-cell u-size-40 u-layout-cell-7">
                      <div className="u-container-layout u-valign-middle u-container-layout-7">
                        <h3 className="u-text u-text-4">
                          Morbi eros lorem, imperdiet
                        </h3>
                        <p className="u-text u-text-font u-text-5">
                          Consectetur vel lacus. Aenean gravida posuere elit.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Duis lacinia et urna
                          sit amet congue. Pellentesque vel leo a eros
                          sollicitudin varius a ac lacus. Aliquam viverra
                          laoreet aliquet.
                        </p>
                        <a className="u-btn u-button-style u-white u-btn-1">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-palette-1-base u-section-3"
        id="carousel_c9c1"
      >
        <div className="u-expanded-width u-palette-3-base u-shape u-shape-rectangle u-shape-1"></div>
        <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-size-15 u-size-30-md">
                <div className="u-layout-col">
                  <div
                    className="u-container-style u-image u-layout-cell u-size-40 u-image-1"
                    data-image-width="900"
                    data-image-height="999"
                  >
                    <div className="u-container-layout u-container-layout-1"></div>
                  </div>
                  <div
                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-2"
                    wfd-invisible="true"
                  >
                    <div className="u-container-layout u-container-layout-2"></div>
                  </div>
                </div>
              </div>
              <div className="u-size-15 u-size-30-md">
                <div className="u-layout-col">
                  <div
                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-3"
                    wfd-invisible="true"
                  >
                    <div className="u-container-layout u-container-layout-3"></div>
                  </div>
                  <div
                    className="u-container-style u-image u-layout-cell u-size-40 u-image-2"
                    data-image-width="900"
                    data-image-height="694"
                  >
                    <div className="u-container-layout u-container-layout-4"></div>
                  </div>
                </div>
              </div>
              <div className="u-size-15 u-size-30-md">
                <div className="u-layout-col">
                  <div
                    className="u-container-style u-image u-layout-cell u-size-40 u-image-3"
                    data-image-width="1200"
                    data-image-height="1018"
                  >
                    <div className="u-container-layout u-container-layout-5"></div>
                  </div>
                  <div
                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-6"
                    wfd-invisible="true"
                  >
                    <div className="u-container-layout u-container-layout-6"></div>
                  </div>
                </div>
              </div>
              <div className="u-size-15 u-size-30-md">
                <div className="u-layout-col">
                  <div
                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-7"
                    wfd-invisible="true"
                  >
                    <div className="u-container-layout u-container-layout-7"></div>
                  </div>
                  <div
                    className="u-container-style u-image u-layout-cell u-size-40 u-image-4"
                    data-image-width="600"
                    data-image-height="784"
                  >
                    <div className="u-container-layout u-container-layout-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-1">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-9">
                <span className="u-align-left u-icon u-icon-circle u-palette-3-base u-spacing-22 u-text-white u-icon-1">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 24 24"
                  ></svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 24 24"
                    id="svg-d74e"
                  >
                    <path d="m18.5 24h-9c-.276 0-.5-.224-.5-.5v-3.325l-2.414.733c-.159.059-.365.092-.586.092-1.103 0-2-.897-2-2v-3h-2c-.561 0-1-.439-1-1 0-.188.055-.373.157-.536l2.336-3.708c.332-.526.507-1.132.507-1.753 0-4.965 4.037-9.003 9-9.003s9 4.038 9 9c0 1.858-.565 3.646-1.636 5.17-.892 1.269-1.364 2.758-1.364 4.305v5.025c0 .276-.224.5-.5.5zm-8.5-1h8v-4.525c0-1.754.534-3.441 1.546-4.88.951-1.354 1.454-2.943 1.454-4.595 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 .813-.229 1.604-.661 2.289l-2.336 3.708 2.497.003c.276 0 .5.224.5.5v3.5c0 .552.448 1 1 1 .104 0 .196-.014.271-.041l3.084-.938c.152-.045.316-.017.443.077s.202.244.202.402z"></path>
                    <path d="m14.5 16h-2c-.481 0-1-.369-1-1.18v-1.32c0-.586-.253-1.122-.676-1.433-1.17-.861-1.852-2.238-1.823-3.682.046-2.383 2.034-4.35 4.433-4.385 1.215-.04 2.369.443 3.235 1.296.858.847 1.331 1.975 1.331 3.176 0 1.422-.658 2.728-1.806 3.582-.434.323-.694.866-.694 1.453v1.493c0 .552-.448 1-1 1zm-1-11c-.018 0-.035 0-.053 0-1.833.026-3.412 1.585-3.446 3.404-.022 1.12.507 2.188 1.416 2.857.678.5 1.083 1.336 1.083 2.239v1.32c0 .149.036.198.036.198l1.964-.018v-1.493c0-.901.41-1.745 1.098-2.255.89-.664 1.402-1.677 1.402-2.78 0-.932-.367-1.806-1.033-2.463-.661-.652-1.535-1.009-2.467-1.009z"></path>
                    <path d="m15 14h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
                  </svg>
                </span>
                <h5 className="u-text u-text-1"> How We Teach</h5>
                <p className="u-text u-text-palette-5-dark-2 u-text-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-1">
                  more
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-2">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-10">
                <span className="u-align-left u-icon u-icon-circle u-palette-3-base u-spacing-22 u-text-white u-icon-2">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                  ></svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 512 512"
                    id="svg-dde6"
                  >
                    <g>
                      <path d="m316.703 216.874 60.137-43.873c11.697-8.534 5.632-27.118-8.841-27.118h-74.267l-22.962-70.965c-4.463-13.788-24.071-13.816-28.543 0l-22.962 70.965h-74.267c-14.48 0-20.532 18.588-8.841 27.118l60.137 43.873-22.979 71.013c-4.464 13.797 11.405 25.277 23.112 16.736l60.07-43.825 60.07 43.825c11.638 8.488 27.587-2.907 23.112-16.736zm-31.886-1.098 12.091 37.367-31.567-23.031c-5.269-3.843-12.414-3.842-17.682 0l-31.567 23.031 12.091-37.367c1.995-6.166-.195-12.916-5.431-16.736l-31.741-23.157h39.168c6.505 0 12.269-4.193 14.271-10.382l12.05-37.24 12.05 37.24c2.003 6.188 7.767 10.382 14.271 10.382h39.168l-31.741 23.157c-5.236 3.82-7.426 10.57-5.431 16.736z"></path>
                      <path d="m499.556 472.922-85.829-150.828c25.867-33.776 41.273-76.025 41.273-121.825-.001-110.429-89.496-200.269-199.501-200.269s-199.5 89.84-199.5 200.269c0 46.139 15.631 88.676 41.846 122.575l-85.404 150.081c-9.902 17.411 2.624 39.075 22.669 39.075h127.55c13.613 0 26.257-7.361 32.997-19.209l52.582-92.4c5.472.197 9.578.205 15.506-.038l52.596 92.437c6.741 11.85 19.385 19.211 32.998 19.211h127.55c20.022-.001 32.583-21.643 22.667-39.079zm-329.975 5.033c-1.419 2.495-4.071 4.045-6.922 4.045h-120.865l77.261-135.771c26.527 25.004 59.841 42.828 96.841 50.338zm-83.582-277.686c0-93.887 76.037-170.269 169.5-170.269s169.5 76.382 169.5 170.269-76.037 170.269-169.5 170.269-169.5-76.383-169.5-170.269zm263.34 281.731c-2.851 0-5.503-1.55-6.923-4.046l-46.413-81.569c36.942-7.678 70.176-25.643 96.594-50.766l77.607 136.381z"></path>
                    </g>
                  </svg>
                </span>
                <h5 className="u-text u-text-3">Results</h5>
                <p className="u-text u-text-palette-5-dark-2 u-text-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-2">
                  more
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-3">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-11">
                <span className="u-align-left u-icon u-icon-circle u-palette-3-base u-spacing-22 u-icon-3">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 477.005 477.005"
                  ></svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 477.005 477.005"
                    x="0px"
                    y="0px"
                    id="svg-44d1"
                    // style={{ enable-background: "new 0 0 477.005 477.005"}}
                  >
                    <g>
                      <path d="M7.075,204.297l71.191,34.293v57.087c0,4.801,2.75,9.178,7.075,11.262l136.194,65.605c1.692,0.814,3.546,1.237,5.425,1.237   h22.886c1.879,0,3.732-0.423,5.426-1.237l135.817-65.425c2.633-1.27,4.738-3.42,5.95-6.079c0.171-0.375,0.334-0.754,0.497-1.134   c0.663-1.552,1.005-3.223,1.005-4.91v-56.407l19.419-9.354v77.412c-4.202,2.801-7.441,6.998-9.01,12.109l-11.049,36.002   c-1.361,4.44-1.324,9.124,0.109,13.542l10.246,31.578c2.922,9.007,11.245,15.254,20.709,15.545   c0.063,0.002,0.125,0.003,0.188,0.004l0.312,0.005c0.065,0.001,0.13,0.001,0.196,0.001c9.304,0,17.52-5.594,20.931-14.253   l11.847-30.072c1.828-4.637,2.059-9.824,0.65-14.605L452.043,319c-1.539-5.229-4.806-9.522-9.083-12.368v-89.438l26.97-12.992   c4.325-2.084,7.075-6.46,7.075-11.262v-9.955c0-4.801-2.75-9.178-7.075-11.262L243.827,62.81c-3.429-1.651-7.422-1.651-10.85,0   L7.075,171.628C2.75,173.711,0,178.088,0,182.89v10.146C0,197.837,2.75,202.213,7.075,204.297z M429.886,385.539l-7.853-24.202   l8.376-27.295l8.456,28.704L429.886,385.539z M373.54,287.824l-126.548,60.959h-17.179l-126.547-60.959v-37.19l129.712,62.483   c1.714,0.826,3.569,1.238,5.425,1.238s3.71-0.412,5.425-1.238l129.713-62.482L373.54,287.824L373.54,287.824z M238.402,87.946   l207.632,100.017l-63.763,30.715c-0.562,0.178-1.116,0.387-1.656,0.646L238.402,287.83L96.19,219.324   c-0.539-0.259-1.093-0.468-1.654-0.646l-63.764-30.716L238.402,87.946z"></path>
                    </g>
                  </svg>
                </span>
                <h5 className="u-text u-text-5">Top Courses</h5>
                <p className="u-text u-text-palette-5-dark-2 u-text-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a
                  href="https://nicepage.com/k/arabic-style-html-templates"
                  className="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-3"
                >
                  more
                </a>
              </div>
            </div>
            <div className="u-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-4">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-12">
                <span className="u-align-left u-icon u-icon-circle u-palette-3-base u-spacing-22 u-text-white u-icon-4">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                  ></svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 512 512"
                    id="svg-60ce"
                  >
                    <path d="m512 346.5c0-74.628906-50.285156-139.832031-121.195312-159.480469-4.457032-103.878906-90.347657-187.019531-195.304688-187.019531-107.800781 0-195.5 87.699219-195.5 195.5 0 35.132812 9.351562 69.339844 27.109375 99.371094l-26.390625 95.40625 95.410156-26.386719c27.605469 16.324219 58.746094 25.519531 90.886719 26.90625 19.644531 70.914063 84.851563 121.203125 159.484375 121.203125 29.789062 0 58.757812-7.933594 84.210938-23.007812l80.566406 22.285156-22.285156-80.566406c15.074218-25.453126 23.007812-54.421876 23.007812-84.210938zm-411.136719-15.046875-57.117187 15.800781 15.800781-57.117187-3.601563-5.632813c-16.972656-26.554687-25.945312-57.332031-25.945312-89.003906 0-91.257812 74.242188-165.5 165.5-165.5s165.5 74.242188 165.5 165.5-74.242188 165.5-165.5 165.5c-31.671875 0-62.445312-8.972656-89.003906-25.945312zm367.390625 136.800781-42.382812-11.726562-5.660156 3.683594c-21.941407 14.253906-47.433594 21.789062-73.710938 21.789062-58.65625 0-110.199219-37.925781-128.460938-92.308594 89.820313-10.355468 161.296876-81.832031 171.65625-171.65625 54.378907 18.265625 92.304688 69.808594 92.304688 128.464844 0 26.277344-7.535156 51.769531-21.789062 73.710938l-3.683594 5.660156zm0 0"></path>
                    <path d="m180.5 271h30v30h-30zm0 0"></path>
                    <path d="m225.5 150c0 8.519531-3.46875 16.382812-9.765625 22.144531l-35.234375 32.25v36.605469h30v-23.394531l25.488281-23.328125c12.398438-11.347656 19.511719-27.484375 19.511719-44.277344 0-33.085938-26.914062-60-60-60s-60 26.914062-60 60h30c0-16.542969 13.457031-30 30-30s30 13.457031 30 30zm0 0"></path>
                  </svg>
                </span>
                <h5 className="u-text u-text-7">Support</h5>
                <p className="u-text u-text-palette-5-dark-2 u-text-8">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a
                  href="https://nicepage.site"
                  className="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-4"
                >
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="u-text u-text-9">
          Images from{" "}
          <a
            href="https://www.freepik.com/photos/business"
            className="u-border-1 u-border-active-white u-border-hover-white u-border-palette-3-base u-btn u-button-link u-button-style u-none u-text-active-palette-3-base u-text-body-alt-color u-text-hover-palette-3-base u-btn-5"
          >
            Freepik
          </a>
        </p>
      </section>
      <section className="u-clearfix u-section-4" id="carousel_3bff">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-opacity u-opacity-75 u-shape u-shape-svg u-text-palette-1-dark-1 u-shape-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="none"
              viewBox="0 0 160 150"
            ></svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 160 150"
              x="0px"
              y="0px"
              id="svg-6c6b"
            >
              <path
                d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
              ></path>
            </svg>
          </div>
          <div
            className="u-align-left u-image u-image-circle u-image-1"
            data-image-width="1031"
            data-image-height="1080"
          ></div>
          <div className="u-align-left u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-text u-text-default u-text-1">
                {" "}
                Online Learning
              </h2>
              <p className="u-text u-text-2">
                Egestas purus viverra accumsan in nisl nisi. Enim nec dui nunc
                mattis enim ut. Consequat interdum varius sit amet mattis
                vulputate enim nulla. Fusce ut placerat orci nulla pellentesque
                dignissim enim sit amet.
              </p>
              <p className="u-text u-text-3">
                Image from{" "}
                <a
                  href="https://www.freepik.com/photos/business"
                  className="u-active-none u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
                >
                  Freepik
                </a>
              </p>
              <a
                href="https://nicepage.cloud"
                className="u-active-palette-5-dark-1 u-border-none u-btn u-btn-rectangle u-button-style u-hover-palette-5-dark-1 u-palette-1-base u-radius-0 u-btn-2"
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ReadMore;
const Wrapper = styled.div`
  padding-top: 200px;
  border-radius: 20px;
`;
