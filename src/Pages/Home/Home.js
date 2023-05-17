import React from 'react';

const Home = () => {
    return (
        <div className="container">
            {/* <!-- left-sidebar  --> */}
            <aside className="left-sidebar">
                <div className="imp-links">
                    <a href="#"><img src="./images/news.png" alt="news" />Latest News</a>
                    <a href="#"><img src="./images/friends.png" alt="friends" />Friends</a>
                    <a href="#"><img src="./images/group.png" alt="group" />Group</a>
                    <a href="#"><img src="./images/marketplace.png" alt="marketplace" />Marketplace</a>
                    <a href="#"><img src="./images/watch.png" alt="watch" />Watch</a>
                    <a href="#">See more</a>
                </div>

                <div className="shortcut-links">
                    <p>Your shortcuts</p>
                    <a href="#"><img src="./images/shortcut-1.png" alt="web developers" />Web Developers</a>
                    <a href="#"><img src="./images/shortcut-2.png" alt="web design course" />Web Design Course</a>
                    <a href="#"><img src="./images/shortcut-3.png" alt="Full Stack Development" />Full Stack Development</a>
                    <a href="#"><img src="./images/shortcut-4.png" alt="Website experts" />Website Experts</a>
                </div>
            </aside>

            {/* <!-- main content  --> */}
            <div className="main-content">

                {/* <!-- story gallery  --> */}
                <div className="story-gallery">
                    <div className="story story1">
                        <img src="./images/upload.png" alt="story" />
                        <p>Post Story</p>
                    </div>
                    <div className="story story2">
                        <img src="./images/member-1.png" alt="story" />
                        <p>Alison</p>
                    </div>
                    <div className="story story3">
                        <img src="./images/member-2.png" alt="story" />
                        <p>Jackson</p>
                    </div>
                    <div className="story story4">
                        <img src="./images/member-3.png" alt="story" />
                        <p>Samona</p>
                    </div>
                    <div className="story story5">
                        <img src="./images/member-4.png" alt="story" />
                        <p>Jackson Doe</p>
                    </div>
                </div>

                {/* <!-- write post  --> */}

                <div className="write-post-container">
                    <div className="user-profile">
                        <img src="./images/profile-pic.png" alt="profile pic" />

                        <div>
                            <p>John Nicholson</p>
                            <small>Public <i className="fa-sharp fa-solid fa-caret-down"></i></small>
                        </div>
                    </div>

                    <div className="post-input-container">
                        <textarea rows="3" placeholder="What's on your mind, John?"></textarea>

                        <div className="add-post-links">
                            <a href="#"><img src="./images/live-video.png" alt="video" />Live Video</a>
                            <a href="#"><img src="./images/photo.png" alt="photo" />Live Photo</a>
                            <a href="#"><img src="./images/feeling.png" alt="feeling" />Feeling/Activity</a>
                        </div>
                    </div>


                </div>

                <div className="post-container">
                    <div className="post-row">
                        <div className="user-profile">
                            <img src="./images/profile-pic.png" alt="profile pic" className="profile-pic" />

                            <div>
                                <p>John Nicholson</p>
                                <span>June 24, 2023. 10:14 AM</span>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>

                    <p className="post-text">Subscribe to <span>@Easy tutorial</span> youtube channel. To learn and increase
                        your html, css
                        knowledge. <a href="#">#Easy tutorial</a><a href="#">#Web development</a></p>
                    <img src="./images/feed-image-1.png" alt="post image" className="post-img" />


                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src="./images/like-blue.png" alt="like" /> 120
                            </div>
                            <div>
                                <img src="./images/comments.png" alt="Comments" /> 20
                            </div>
                            <div>
                                <img src="./images/share.png" alt="share" /> 5
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src="./images/profile-pic.png" alt="profile pic" />
                            <a href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-row">
                        <div className="user-profile">
                            <img src="./images/profile-pic.png" alt="profile pic" className="profile-pic" />

                            <div>
                                <p>John Nicholson</p>
                                <span>June 20, 2023. 10:14 AM</span>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>

                    <p className="post-text">Subscribe to <span>@Easy tutorial</span> youtube channel. To learn and increase
                        your html, css
                        knowledge. <a href="#">#Easy tutorial</a><a href="#">#Web development</a></p>
                    <img src="./images/feed-image-2.png" alt="post image" className="post-img" />


                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src="./images/like-blue.png" alt="like" /> 120
                            </div>
                            <div>
                                <img src="./images/comments.png" alt="Comments" /> 20
                            </div>
                            <div>
                                <img src="./images/share.png" alt="share" /> 5
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src="./images/profile-pic.png" alt="profile pic" />
                            <a href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-row">
                        <div className="user-profile">
                            <img src="./images/profile-pic.png" alt="profile pic" className="profile-pic" />

                            <div>
                                <p>John Nicholson</p>
                                <span>June 20, 2023. 10:14 AM</span>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>

                    <p className="post-text">Subscribe to <span>@Easy tutorial</span> youtube channel. To learn and increase
                        your html, css
                        knowledge. <a href="#">#Easy tutorial</a><a href="#">#Web development</a></p>
                    <img src="./images/feed-image-3.png" alt="post image" className="post-img" />


                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src="./images/like-blue.png" alt="like" /> 120
                            </div>
                            <div>
                                <img src="./images/comments.png" alt="Comments" /> 20
                            </div>
                            <div>
                                <img src="./images/share.png" alt="share" /> 5
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src="./images/profile-pic.png" alt="profile pic" />
                            <a href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-row">
                        <div className="user-profile">
                            <img src="./images/profile-pic.png" alt="profile pic" className="profile-pic" />

                            <div>
                                <p>John Nicholson</p>
                                <span>June 20, 2023. 10:14 AM</span>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>

                    <p className="post-text">Subscribe to <span>@Easy tutorial</span> youtube channel. To learn and increase
                        your html, css
                        knowledge. <a href="#">#Easy tutorial</a><a href="#">#Web development</a></p>
                    <img src="./images/feed-image-4.png" alt="post image" className="post-img" />


                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src="./images/like-blue.png" alt="like" /> 120
                            </div>
                            <div>
                                <img src="./images/comments.png" alt="Comments" /> 20
                            </div>
                            <div>
                                <img src="./images/share.png" alt="share" /> 5
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src="./images/profile-pic.png" alt="profile pic" />
                            <a href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-row">
                        <div className="user-profile">
                            <img src="./images/profile-pic.png" alt="profile pic" className="profile-pic" />

                            <div>
                                <p>John Nicholson</p>
                                <span>June 20, 2023. 10:14 AM</span>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>

                    <p className="post-text">Subscribe to <span>@Easy tutorial</span> youtube channel. To learn and increase
                        your html, css
                        knowledge. <a href="#">#Easy tutorial</a><a href="#">#Web development</a></p>
                    <img src="./images/feed-image-5.png" alt="post image" className="post-img" />


                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src="./images/like-blue.png" alt="like" /> 120
                            </div>
                            <div>
                                <img src="./images/comments.png" alt="Comments" /> 20
                            </div>
                            <div>
                                <img src="./images/share.png" alt="share" /> 5
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src="./images/profile-pic.png" alt="profile pic" />
                            <a href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>

                <button className="load-btn">Load More</button>
            </div>

            {/* <!-- right-sidebar  --> */}
            <aside className="right-sidebar">
                <div className="sidebar-title">
                    <h4>Events</h4>
                    <a href="#">See All</a>
                </div>

                <div className="event">
                    <div className="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div className="right-event">
                        <h4>Social Media</h4>
                        <p><i className="fa-solid fa-location-dot"></i>Willson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>

                <div className="event">
                    <div className="left-event">
                        <h3>27</h3>
                        <span>June</span>
                    </div>
                    <div className="right-event">
                        <h4>Mobile Marketing</h4>
                        <p><i className="fa-solid fa-location-dot"></i>Willson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>


                <div className="sidebar-title">
                    <h4>Advertisement</h4>
                    <a href="#">Close</a>
                </div>
                <img src="./images/advertisement.png" alt="ads" className="ads" />

                <div className="sidebar-title">
                    <h4>Connections</h4>
                    <a href="#">Hide Chat</a>
                </div>

                <div className="online-list">
                    <div className="online">
                        <img src="./images/member-1.png" alt="member 1" />
                    </div>
                    <p>Alison Mina</p>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="./images/member-2.png" alt="member 1" />
                    </div>
                    <p>Jackson Aston</p>
                </div>
                <div className="online-list">
                    <div className="online">
                        <img src="./images/member-3.png" alt="member 3" />
                    </div>
                    <p>Samona Rose</p>
                </div>
            </aside>
        </div>
    );
};

export default Home;