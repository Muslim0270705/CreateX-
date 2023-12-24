import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <h1 className="header__logo">
                        <svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_41044_1944)">
                                <path d="M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z" fill="#1E212C"/>
                                <path d="M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z" fill="#1E212C"/>
                                <path d="M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z" fill="#1E212C"/>
                                <path d="M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z" fill="#1E212C"/>
                                <path d="M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z" fill="#1E212C"/>
                                <path d="M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z" fill="#1E212C"/>
                                <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF3F3A"/>
                                <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF3F3A"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_41044_1944">
                                    <rect width="130" height="22" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </h1>
                    <ul className="header__menu">
                      <li className="header__menu-item">
                          <Link className="header__menu-item" to={""}>About Us</Link>
                      </li>
                        <li className="header__menu-item">
                            <Link  className="header__menu-item" to={"/products"}>Courses</Link >
                        </li>
                        <li className="header__menu-item">
                            <Link  className="header__menu-item" to={""} >Events</Link >
                        </li>
                        <li className="header__menu-item">
                            <Link  className="header__menu-item" to={""}>Blog</Link >
                       </li>
                        <li className="header__menu-item">
                            <Link  className="header__menu-item" to={""}>Contacts</Link >
                        </li>
                    </ul>
                    <div className="header__btns">
                        <button className="btn">
                            Get consultation
                        </button>
                        <button className="header__btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 2.70866C8.38936 2.70866 7.08353 4.0145 7.08353 5.62533C7.08353 7.23616 8.38936 8.54199 10.0002 8.54199C11.611 8.54199 12.9169 7.23616 12.9169 5.62533C12.9169 4.0145 11.611 2.70866 10.0002 2.70866ZM5.41686 5.62533C5.41686 3.09402 7.46889 1.04199 10.0002 1.04199C12.5315 1.04199 14.5835 3.09402 14.5835 5.62533C14.5835 8.15663 12.5315 10.2087 10.0002 10.2087C7.46889 10.2087 5.41686 8.15663 5.41686 5.62533Z" fill="#424551"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08691 12.7087C4.50914 12.7087 4.05755 12.99 3.87424 13.3942C3.62053 13.9536 3.39078 14.6196 3.33656 15.2513C3.31233 15.5337 3.43006 15.7418 3.5923 15.8426C4.44993 16.3753 6.43719 17.292 10.0002 17.292C13.5632 17.292 15.5505 16.3753 16.4081 15.8426C16.5703 15.7418 16.6881 15.5337 16.6638 15.2513C16.6096 14.6196 16.3799 13.9536 16.1261 13.3942C15.9428 12.99 15.4912 12.7087 14.9135 12.7087H5.08691ZM2.35639 12.7058C2.86301 11.5887 3.99428 11.042 5.08691 11.042H14.9135C16.0061 11.042 17.1374 11.5887 17.644 12.7058C17.935 13.3474 18.2472 14.2099 18.3244 15.1088C18.3946 15.9273 18.0544 16.7819 17.2876 17.2583C16.1596 17.959 13.8665 18.9587 10.0002 18.9587C6.13386 18.9587 3.84078 17.959 2.71283 17.2583C1.94595 16.7819 1.60575 15.9273 1.676 15.1088C1.75315 14.2099 2.0654 13.3474 2.35639 12.7058Z" fill="#424551"/>
                            </svg>
                            Log in / Register
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;