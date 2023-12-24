import React, {useState} from 'react';
import img from "../../../assets/illustration.png";
const Do = () => {
    const [active,setActive] = useState(1)
    return (
        <section className="do">
            <div className="container">
              <h3 className="do__subtitle">
                  Our benefits
              </h3>
                <h2 className="do__title">
                    That’s how we do it
                </h2>
                <div className="do__tabs">
                    <div onClick={() => setActive(1)} className={`do__tab ${active === 1 ? "active" : ""} `}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77932 1.46709C7.24248 0.398992 8.75719 0.39899 9.22036 1.46709L10.6214 4.69809L14.1273 5.03216C15.2862 5.14259 15.7543 6.58317 14.8816 7.35373L12.2417 9.68466L13.0073 13.1221C13.2604 14.2585 12.035 15.1488 11.0325 14.5569L7.99984 12.7665L4.96721 14.5569C3.96469 15.1488 2.73926 14.2585 2.99236 13.1221L3.75801 9.68466L1.11809 7.35373C0.245398 6.58317 0.71347 5.14259 1.87242 5.03216L5.37824 4.69809L6.77932 1.46709ZM9.40091 5.22735L7.99984 1.99635L6.59876 5.22735C6.406 5.67189 5.98678 5.97647 5.50444 6.02243L1.99861 6.35649L4.63852 8.68743C5.00174 9.00813 5.16186 9.50095 5.05652 9.97389L4.29088 13.4114L7.32351 11.621C7.74075 11.3746 8.25893 11.3746 8.67617 11.621L11.7088 13.4114L10.9432 9.97389C10.8378 9.50095 10.9979 9.00813 11.3612 8.68743L14.0011 6.35649L10.4952 6.02243C10.0129 5.97647 9.59368 5.67189 9.40091 5.22735Z" fill="#FF3F3A"/>
                        </svg>
                        Experienced Tutors
                    </div>
                    <div onClick={() => setActive(2)} className={`do__tab ${active === 2 ? "active" : ""} `}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9547 2.16732C9.86168 2.16732 9.77547 2.21676 9.72843 2.29736L9.72433 2.30438L6.66683 7.26115V13.834H12.3907C12.5135 13.834 12.6198 13.7487 12.6464 13.629L12.6487 13.6186L14.3487 6.97883C14.3798 6.8179 14.2565 6.66732 14.0915 6.66732H11.5002C11.066 6.66732 10.6268 6.52228 10.307 6.21014C9.97075 5.88199 9.81488 5.41203 9.91491 4.90572L10.3941 2.48001C10.4261 2.31806 10.3022 2.16732 10.1372 2.16732H9.9547ZM5.3335 13.834V7.73875H2.97118C2.82739 7.73875 2.7104 7.85476 2.70929 7.99872C2.70929 7.99872 2.70929 7.99872 2.70929 7.99872L2.66684 13.5701C2.66572 13.7154 2.78327 13.834 2.92868 13.834H5.3335ZM5.62809 6.40541L8.58155 1.61731C8.86843 1.13222 9.39032 0.833984 9.9547 0.833984H10.1372C11.1424 0.833984 11.897 1.75237 11.7022 2.73844L11.223 5.16415C11.2144 5.20732 11.22 5.22693 11.2213 5.23124C11.2228 5.23604 11.226 5.24402 11.2383 5.25596C11.2661 5.28317 11.3492 5.33398 11.5002 5.33398H14.0915C15.1121 5.33398 15.8701 6.27923 15.6487 7.27539L15.6464 7.28579L13.9453 13.93C13.7788 14.6537 13.1343 15.1673 12.3907 15.1673H2.92868C2.04298 15.1673 1.32676 14.4457 1.33354 13.56C1.33354 13.56 1.33354 13.56 1.33354 13.56L1.37599 7.98854C1.38271 7.11235 2.09485 6.40541 2.97118 6.40541H5.62809Z" fill="#9A9CA5"/>
                        </svg>
                        Feedback & Support
                    </div>
                    <div onClick={() => setActive(3)} className={`do__tab ${active === 3 ? "active" : ""} `}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20184 0.736397C8.38953 0.642555 8.61044 0.642555 8.79813 0.736397L15.4648 4.06973C15.6906 4.18266 15.8333 4.4135 15.8333 4.66602C15.8333 4.91853 15.6906 5.14937 15.4648 5.2623L8.79813 8.59563C8.61044 8.68948 8.38953 8.68948 8.20184 8.59563L1.53517 5.2623C1.30932 5.14937 1.16665 4.91853 1.16665 4.66602C1.16665 4.4135 1.30932 4.18266 1.53517 4.06973L8.20184 0.736397ZM3.32403 4.66602L8.49998 7.25399L13.6759 4.66602L8.49998 2.07804L3.32403 4.66602Z" fill="#9A9CA5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23703 7.70121C1.40169 7.37189 1.80214 7.2384 2.13146 7.40306L8.49998 10.5873L14.8685 7.40306C15.1978 7.2384 15.5983 7.37189 15.7629 7.70121C15.9276 8.03052 15.7941 8.43097 15.4648 8.59563L8.79813 11.929C8.61044 12.0228 8.38953 12.0228 8.20184 11.929L1.53517 8.59563C1.20586 8.43097 1.07237 8.03052 1.23703 7.70121Z" fill="#9A9CA5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23703 11.0345C1.40169 10.7052 1.80214 10.5717 2.13146 10.7364L8.49998 13.9207L14.8685 10.7364C15.1978 10.5717 15.5983 10.7052 15.7629 11.0345C15.9276 11.3639 15.7941 11.7643 15.4648 11.929L8.79813 15.2623C8.61044 15.3561 8.38953 15.3561 8.20184 15.2623L1.53517 11.929C1.20586 11.7643 1.07237 11.3639 1.23703 11.0345Z" fill="#9A9CA5"/>
                        </svg>
                        24/7 Online Library
                    </div>
                    <div onClick={() => setActive(4)} className={`do__tab ${active === 4 ? "active" : ""} `}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6153 7.04557C14.5204 7.70339 14.2954 8.32861 13.9619 8.90355C13.9869 9.0459 13.9997 9.18979 13.9997 9.33429C13.9997 9.83617 13.8543 10.3165 13.5849 10.7529C13.4504 10.9707 13.4158 11.226 13.4025 11.3946C13.3873 11.5879 13.3924 11.7994 13.4062 12.0025C13.4217 12.2304 13.4497 12.4697 13.4818 12.6954C13.2216 12.6196 12.9395 12.5434 12.6704 12.4826C12.4465 12.4321 12.2174 12.3891 12.0099 12.3676C11.8289 12.349 11.5674 12.3345 11.3335 12.4101C10.8221 12.5754 10.2594 12.6676 9.66636 12.6676C8.96109 12.6676 8.31335 12.5424 7.74559 12.325C7.60903 12.3312 7.47147 12.3343 7.33301 12.3343C6.52993 12.3343 5.75701 12.2287 5.03385 12.0335C6.08516 13.2494 7.81828 14.001 9.66636 14.001C10.3883 14.001 11.0812 13.8901 11.7198 13.6864C11.7209 13.6865 11.723 13.6864 11.726 13.6864C11.7424 13.686 11.7879 13.6851 11.8729 13.6939C12.0067 13.7077 12.1786 13.7385 12.377 13.7833C12.7719 13.8724 13.2157 14.0038 13.5615 14.1136C14.2949 14.3464 15.0056 13.7064 14.8745 12.9621C14.8181 12.6418 14.7595 12.2508 14.7365 11.9122C14.7249 11.7419 14.7236 11.6021 14.7317 11.4995C14.7351 11.457 14.7394 11.4304 14.7421 11.4162C15.1172 10.7949 15.333 10.0874 15.333 9.33429C15.333 8.48526 15.0693 7.70995 14.6153 7.04557Z" fill="#9A9CA5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73109 3.79943C2.83245 4.48662 2.33306 5.38871 2.33306 6.33398C2.33306 6.80534 2.45577 7.25932 2.68599 7.68147C2.77367 7.84226 2.79854 8.00812 2.80744 8.1204C2.81714 8.24283 2.8123 8.36867 2.80166 8.48633C2.78034 8.72191 2.72949 8.98884 2.66849 9.25174C2.59715 9.55927 2.50572 9.88724 2.41296 10.1952C2.76512 10.0672 3.15003 9.93601 3.51493 9.82956C3.80985 9.74352 4.10767 9.66886 4.37274 9.62695C4.60108 9.59084 4.93243 9.55536 5.2177 9.65405C5.85792 9.87555 6.57411 10.0007 7.33306 10.0007C8.76451 10.0007 10.0358 9.55621 10.935 8.86854C11.8337 8.18135 12.3331 7.27926 12.3331 6.33398C12.3331 5.38871 11.8337 4.48662 10.935 3.79943C10.0358 3.11176 8.76451 2.66732 7.33306 2.66732C5.90162 2.66732 4.63034 3.11176 3.73109 3.79943ZM2.92116 2.74028C4.07283 1.85959 5.63489 1.33398 7.33306 1.33398C9.03123 1.33398 10.5933 1.85959 11.745 2.74028C12.8973 3.62145 13.6664 4.88602 13.6664 6.33398C13.6664 7.78194 12.8973 9.04652 11.745 9.92769C10.5933 10.8084 9.03123 11.334 7.33306 11.334C6.43769 11.334 5.58244 11.188 4.80591 10.9224C4.80513 10.9246 4.74215 10.9184 4.58098 10.9439C4.39521 10.9733 4.15809 11.0308 3.88836 11.1095C3.35138 11.2662 2.74835 11.4878 2.28902 11.6666C1.49327 11.9763 0.682633 11.212 0.95074 10.3979C1.09284 9.96647 1.26043 9.42121 1.36966 8.95041C1.42468 8.71324 1.46039 8.51384 1.47375 8.36618C1.47839 8.31492 1.47958 8.27756 1.47932 8.2523C1.17246 7.66592 0.99973 7.01748 0.99973 6.33398C0.99973 4.88602 1.76887 3.62145 2.92116 2.74028Z" fill="#9A9CA5"/>
                        </svg>
                        Community
                    </div>
                </div>
                {
                    active === 1  ?  <div className="do__content">
                        <div className="do__content-left">
                            <h3 className="do__content-title">
                                Only practicing tutors 1
                            </h3>
                            <p className="do__content-desc">     Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                        </div>
                        <img src={img} alt=""/>
                    </div> : active === 2 ?
                        <div className="do__content">
                          <div className="do__content-left">
                            <h3 className="do__content-title">
                                Only practicing tutors 2
                            </h3>
                            <p className="do__content-desc">     Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                           </div>
                        <img src={img} alt=""/>
                    </div> : active === 3 ?  <div className="do__content">
                            <div className="do__content-left">
                                <h3 className="do__content-title">
                                    Only practicing tutors 3
                                </h3>
                                <p className="do__content-desc">     Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                            </div>
                            <img src={img} alt=""/>
                        </div> :
                            <div className="do__content">
                              <div className="do__content-left">
                                <h3 className="do__content-title">
                                    Only practicing tutors 4
                                </h3>
                                <p className="do__content-desc">     Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                              </div>
                            <img src={img} alt=""/>
                        </div>
                }
            </div>
        </section>
    );
};

export default Do;