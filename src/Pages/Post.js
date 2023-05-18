import React from 'react';
import imgPhoto from "../Assets/images/photo.png"
import imgVideo from "../Assets/images/video.png"
import imgEvent from "../Assets/images/event.png"
import imgUser from "../Assets/images/user-1.png"
import imgTrend from "../Assets/images/more.png"
import imgCover from "../Assets/images/cover-pic.png"
// import imgCover from "../Assets/images/cover-pic.png"
import postCSS from './Post.module.css'

const Post = () => {
    return (
        <div className={postCSS.container}>
            {/* <!-- left sidebar  --> */}
            <div className={postCSS.leftSidebar}>
                <div className={postCSS.sidebarProfileBox}>
                    <img src={imgCover} alt="cover" width="100%" />
                    <div className={postCSS.sidebarProfileInfo}>
                        <img src={imgUser} alt="profile" />
                        <h1>John Smith</h1>
                        <h3>Web developer at Microsoft</h3>
                        <ul>
                            <li>Your profile views <span>52</span></li>
                            <li>Your post views <span>810</span></li>
                            <li>Your connections <span>205</span></li>
                        </ul>
                    </div>

                    <div className={postCSS.sidebarProfileLink}>
                        <a href="#"><img src="./images/items.png" alt="" />My Items</a>
                        <a href="#"><img src="./images/premium.png" alt="" />Try premium</a>
                    </div>
                </div>

                <div className={postCSS.sidebarActivity}>
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

                    <div className={postCSS.discoverMoreLink}>
                        <a href="#">Discover more</a>
                    </div>
                </div>

                <p id="showMoreActivity" onclick="toggleActivity()">Show more <b>+</b></p>
            </div>





            {/* <!-- middle  --> */}
            <div className={postCSS.middle}>

                <div className={postCSS.createPost}>
                    <div className={postCSS.createPostInput}>
                        <img src={imgUser} alt="user" />
                        <textarea rows="2" placeholder="write a post"></textarea>
                    </div>
                    <div className={postCSS.createPostLinks}>
                        <li><img src={imgPhoto} alt="" />Photo</li>
                        <li><img src={imgVideo} alt="video" />Video</li>
                        <li><img src={imgEvent} />Event</li>
                        <li>Post</li>
                    </div>
                </div>

                <div className={postCSS.sortBy}>
                    <hr />
                    <p>Sort by: <span>top <img src="./images/down-arrow.png" alt="img" /></span></p>
                </div>


                <div className={postCSS.post}>
                    <div className={postCSS.postAuthor}>
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

                    <div className={postCSS.postStats}>
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className={postCSS.likedUsers}>Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className={postCSS.postActivity}>
                        <div>
                            <img src="./images/user-2.png" alt="image" className={postCSS.postActivityUserIcon} />
                            <img src="./images/down-arrow.png" alt="image" className={postCSS.postActivityArrowIcon} />
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className={postCSS.post}>
                    <div className={postCSS.postAuthor}>
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

                    <div className={postCSS.postStats}>
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className={postCSS.likedUsers}>Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className={postCSS.postActivity}>
                        <div>
                            <img src="./images/user-2.png" alt="image" className={postCSS.postActivityUserIcon} />
                            <img src="./images/down-arrow.png" alt="image" className={postCSS.postActivityArrowIcon} />
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className={postCSS.post}>
                    <div className={postCSS.postAuthor}>
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

                    <div className={postCSS.postStats}>
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className={postCSS.likedUsers}>Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className={postCSS.postActivity}>
                        <div>
                            <img src="./images/user-2.png" alt="image" className={postCSS.postActivityUserIcon} />
                            <img src="./images/down-arrow.png" alt="image" className={postCSS.postActivityArrowIcon} />
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>


                <div className={postCSS.post}>
                    <div className={postCSS.postAuthor}>
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

                    <div className={postCSS.postStats}>
                        <div>
                            <img src="./images/thumbsup.png" alt="img" />
                            <img src="./images/love.png" alt="img" />
                            <img src="./images/clap.png" alt="img" />
                            <span className={postCSS.likedUsers}>Abhinav Mishra and 75 others</span>
                        </div>
                        <div>
                            <span>22 comments &middot; 40 shares</span>
                        </div>
                    </div>

                    <div className={postCSS.postActivity}>
                        <div>
                            <img src="./images/user-2.png" alt="image" className={postCSS.postActivityUserIcon} />
                            <img src="./images/down-arrow.png" alt="image" className={postCSS.postActivityArrowIcon} />
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/like.png" alt="like" />
                            <span>Like</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/comment.png" alt="comment" />
                            <span>Comment</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/share.png" alt="share" />
                            <span>Share</span>
                        </div>
                        <div className={postCSS.postActivityLink}>
                            <img src="./images/send.png" alt="send" />
                            <span>Send</span>
                        </div>
                    </div>
                </div>

            </div>



            {/* <!-- rightSidebar  --> */}
            <div className={postCSS.rightSidebar}>
                <div className={postCSS.sidebarNews}>
                    <img src={imgTrend} alt="more" className={postCSS.moreInfoIcon} />
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

                    <a href="#" className={postCSS.readMoreLink}>Read More</a>

                </div>

                <div className={postCSS.sidebarAd}>
                    <small>Ad &middot; &middot; &middot;</small>
                    <p>Master the 5 principles of web design</p>
                    <div>
                        <img src="./images/user-1.png" alt="img" />
                        <img src="./images/mi-logo.png" alt="img" />
                    </div>
                    <b>Brand and Demand in Xiaomi</b>
                    <a href="#" className={postCSS.adLink}>Learn More</a>
                </div>

                <div className={postCSS.sidebarUsefulLinks}>
                    <a href="#">About</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Help Center</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Advertising</a>
                    <a href="#">Get the App</a>
                    <a href="#">More</a>

                    <div className={postCSS.copyrightMsg}>
                        <img src="./images/logo.png" alt="logo" />
                        <p>Linkedup &#169; 2023. All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;