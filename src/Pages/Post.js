import React from 'react';
import './Post.css'
import postCSS from './Post.module.css'

const Post = () => {
    return (
        <div className="container">
            {/* <!-- left sidebar  --> */}
            <div className="left-sidebar">
                <div className="sidebar-profile-box">
                    <img src="./images/cover-pic.png" alt="cover" width="100%" />
                    <div className="sidebar-profile-info">
                        <img src="./images/user-1.png" alt="profile" />
                        <h1>John Smith</h1>
                        <h3>Web developer at Microsoft</h3>
                        <ul>
                            <li>Your profile views <span>52</span></li>
                            <li>Your post views <span>810</span></li>
                            <li>Your connections <span>205</span></li>
                        </ul>
                    </div>

                    <div className="sidebar-profile-link">
                        <a href="#"><img src="./images/items.png" alt="" />My Items</a>
                        <a href="#"><img src="./images/premium.png" alt="" />Try premium</a>
                    </div>
                </div>

                <div className="sidebar-activity">
                    <h3>RECENT</h3>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Web Development</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />User Interface</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Online Learning</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Learn Online</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Code Better</a>
                    <a href="#"><img src="./images/recent.png" alt="pic" />Group Learning</a>
                    <h3>GROUPS</h3>
                    <a href="#"><img src="./images/group.png" alt="pic" />Web Design Group</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />HTML & CSS Learners</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />Python & JavaScript Group</a>
                    <a href="#"><img src="./images/group.png" alt="pic" />Learn Coding Online</a>
                    <h3>HASHTAG</h3>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> webdevelopment</a>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> userinterface</a>
                    <a href="#"><img src="./images/hashtag.png" alt="hashtag" /> onlinelearning</a>

                    <div className="discover-more-link">
                        <a href="#">Discover more</a>
                    </div>
                </div>

                <p id="show-more-activity" onclick="toggleActivity()">Show more <b>+</b></p>
            </div>





            {/* <!-- middle  --> */}
            <div className="middle">

                <div className="createPost">
                    <div className="create-post-input">
                        <img src="../Assets/images/user-1.png" alt="user" />
                        
                        <textarea rows="2" placeholder="write a post"></textarea>
                    </div>
                    <div className="create-post-links">
                        <li><img src="../Assets/images/photo.png" alt="Photo" />Photo</li>
                        <li><img src="../Assets/images/video.png" alt="video" />Video</li>
                        <li><img src="./images/event.png" alt="event" />Event</li>
                        <li>Post</li>
                    </div>
                </div>

                <div className="sort-by">
                    <hr />
                    <p>Sort by: <span>top <img src="./images/down-arrow.png" alt="img" /></span></p>
                </div>


                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-3.png" alt="user" />
                        <div>
                            <h1>Benjamin Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>2 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-1.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-1.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-3.png" alt="user" />
                        <div>
                            <h1>Benjamin Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>2 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-1.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-1.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-3.png" alt="user" />
                        <div>
                            <h1>Benjamin Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>2 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-1.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-1.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-3.png" alt="user" />
                        <div>
                            <h1>Benjamin Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>2 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-1.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-1.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-4.png" alt="user" />
                        <div>
                            <h1>Canserio Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>21 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-2.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-2.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className="post">
                    <div className="post-author">
                        <img src="./images/user-4.png" alt="user" />
                        <div>
                            <h1>Nikko Leo</h1>
                            <small>Founder and CEO at Gellelio group | Angel Investor</small>
                            <small>2 hours ago</small>
                        </div>

                    </div>
                    <p>The success of every websites depends on search engine optimization and digital marketing
                        strategy. If you are on first page of all major search engines then you are ahead among your
                        competitors.</p>

                    <img src="./images/post-image-3.png" alt="post image" width="100%" />

                    <div className="post-stats">
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className="liked-users">Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className="post-activity">
                        <div>
                            <img src="./images/user-3.png" alt="image" className="post-activity-user-icon" />
                            <img src="./images/down-arrow.png" alt="image" className="post-activity-arrow-icon" />
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className="post-activity-link">
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>

            </div>



            {/* <!-- right-sidebar  --> */}
            <div className="right-sidebar">
                <div className="sidebar-news">
                    <img src="./images/more.png" alt="more" className="more-info-icon" />
                    <h3>Trending News</h3>
                    <a href="#">High demand for skilled manpower</a>
                    <span>1d ago &middot; 10,934 readers</span>

                    <a href="#">Careers growing horizontally too</a>
                    <span>19h ago &middot; 1,934 readers</span>

                    <a href="#">Less work visa for US, more for UK</a>
                    <span>1d ago &middot; 27,934 readers</span>

                    <a href="#">More hiring = higher confidence?</a>
                    <span>18h ago &middot; 8,934 readers</span>

                    <a href="#">Gautam Adani is the world's third richest</a>
                    <span>12h ago &middot; 4,334 readers</span>

                    <a href="#" className="read-more-link">Read More</a>

                </div>

                <div className="sidebar-ad">
                    <small>Ad &middot; &middot; &middot;</small>
                    <p>Master the 5 principles of web design</p>
                    <div>
                        <img src="./images/user-1.png" alt="img" />
                        <img src="./images/mi-logo.png" alt="img" />
                    </div>
                    <b>Brand and Demand in Xiaomi</b>
                    <a href="#" className="ad-link">Learn More</a>
                </div>

                <div className="sidebar-useful-links">
                    <a href="#">About</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Help Center</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Advertising</a>
                    <a href="#">Get the App</a>
                    <a href="#">More</a>

                    <div className="copyright-msg">
                        <img src="./images/logo.png" alt="logo" />
                        <p>Linkedup &#169; 2023. All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;