import React, {useState} from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink
} from 'mdb-react-ui-kit';

const Resume = (props) => {

    const [activePage, setActivePage] = useState(1);
    const [disabled, setDisabled] = useState(false);
    console.log(activePage);

    const handlePageChange = (pageNumber) => {
        if(pageNumber < 4){
            setActivePage(pageNumber);
        } else {
            setActivePage(3)
        }
        if(pageNumber === 0){
            setActivePage(1);
        }
    }

    return(
        <>
            <MDBContainer className={`mt-5`}>
                <MDBRow>
                    <MDBCol lg={`3`} className={``}>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}><strong>Contact Me!</strong></MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    <strong>Julio Sandoval</strong>
                                </MDBCardText>
                                <MDBCardText>
                                    <span className={`fa fa-briefcase`} style={{color: `teal`}}>&nbsp;</span>Web Developer
                                </MDBCardText>
                                <MDBCardText>
                                    <span className={`fa fa-home`} style={{color: `teal`}}>&nbsp;</span>El Monte, CA
                                </MDBCardText>
                                <MDBCardText>
                                    <span className={`fa fa-envelope`} style={{color: `teal`}}>&nbsp;</span><a href="mailto:sandovaljulio2@yahoo.com">sandovaljulio2@yahoo.com</a>
                                </MDBCardText>
                                <MDBCardText>
                                    <span className={`fa fa-github fa-lg`} style={{color: `teal`}}></span>
                                    <a href="https://github.com/sourcecodeguy1?tab=repositories" target={`_blank`}> Sourcecodeguy1</a>
                                </MDBCardText>
                                <MDBCardText>
                                    <span className={`fa fa-linkedin fa-lg`} style={{color: `teal`}}></span>
                                    <a href="https://www.linkedin.com/in/julio-sandoval-ba587613a/" target={`_blank`}> Julio Sandoval</a>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}><strong>Front-end</strong></MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    <div className={`d-flex flex-wrap justify-content-between`}>
                                        <div>HTML5</div>
                                        <div>CSS3</div>
                                        <div>JavaScript</div>
                                        <div>jQuery</div>
                                        <div>React</div>
                                        <div>Bootstrap</div>
                                    </div>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}><strong>Back-end</strong></MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    <div className={`d-flex flex-wrap justify-content-between`}>
                                        <div>PHP/Laravel</div>
                                        <div>MySQL</div>
                                        <div>Node Js</div>
                                        <div>Express</div>
                                    </div>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}><strong>Source Control</strong></MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    <div className={`d-flex flex-wrap justify-content-between`}>
                                        <div>Git</div>
                                        <div>GitHub</div>
                                        <div>GitLab</div>
                                        <div>Jira</div>
                                    </div>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}><strong>DevOps</strong></MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    <div className={`d-flex flex-wrap justify-content-around`}>
                                        <div>CI/CD</div>
                                        <div>Docker</div>
                                    </div>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className={`shadow-6-strong rounded-7 mb-2`}>
                            <MDBCardTitle className={`text-center`}>
                                <span className={`fa fa-graduation-cap fa-lg`} style={{color: `teal`}}>&nbsp;</span><strong>Education</strong>
                            </MDBCardTitle>
                            <MDBCardBody>
                                <MDBCardText>
                                    Santa Monica College - Santa Monica, CA
                                </MDBCardText>
                                <MDBCardText>
                                    <i className={`fa fa-calendar`}>&nbsp; Graduation: Dec 2019</i>
                                </MDBCardText>
                                <MDBCardText>A.S. Degree in Computer Programming</MDBCardText>
                                <MDBCardText>A.S. Degree in Web Programmer</MDBCardText>
                                <MDBCardText>A.S. Degree in Database Application Developer</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={`1`} className={`text-center align-self-center d-sm-flex justify-content-sm-center d-flex justify-content-center`}>
                        <MDBPaginationLink aria-label='Previous' style={{cursor: `pointer`}}>
                            <span onClick={() => handlePageChange(activePage - 1)} aria-hidden='true'><i className="fas fa-chevron-left fa-2x"></i></span>
                        </MDBPaginationLink>
                        <MDBPaginationLink aria-label='Previous' className={`d-lg-none`} style={{cursor: `pointer`}}>
                            <span onClick={() => handlePageChange(activePage + 1)} aria-hidden='true'><i className="fas fa-chevron-right fa-2x"></i></span>
                        </MDBPaginationLink>
                    </MDBCol>
                    <MDBCol lg={`7`}>
                        <MDBCard className={`shadow-6-strong rounded-7`}>
                            <MDBCardBody>
                                <MDBCardTitle className={`d-sm-flex justify-content-sm-between d-flex justify-content-between`}>
                                    <MDBCol sm={`11`}>
                                        <span className={`fa fa-suitcase fa-lg`} style={{color: `teal`}}>&nbsp;</span>
                                        <strong>Work Experience</strong>
                                    </MDBCol>
                                    <MDBCol sm={`1`} >
                                        <div>{activePage + "/3"}</div>
                                    </MDBCol>
                                </MDBCardTitle>
                                {activePage === 1 ?
                                    <div>
                                        <MDBCardText>Web Developer / RateSpecial LLC (Remote)</MDBCardText>
                                        <MDBCardText>
                                            <i className={`fa fa-calendar`}>&nbsp;</i> Jan 2022 -&nbsp;
                                            <span style={{
                                                backgroundColor: `teal`,
                                                color: `white`,
                                                borderRadius: `5px`,
                                                padding: `7px`,
                                                fontSize: `12px`
                                            }}>Current</span>
                                        </MDBCardText>
                                        <MDBCardText>
                                            <ul>
                                                <li>Creating landing pages for a variety of different departments for
                                                    marketing, sales, accounting, and etc.
                                                </li>
                                                <li>Using a combination of different front-end programming languages such as
                                                    HTML, CSS, and JavaScript.
                                                </li>
                                                <li>Utilizing Flexbox to make mobile responsive websites.</li>
                                                <li>Working under the Laravel framework with PHP and MySQL for back-end
                                                    programming.
                                                </li>
                                                <li>Utilizing Bitbucket to push code under a variety of repositories.</li>
                                                <li>Creating Controllers, Models, and EventListeners through the php artisan
                                                    command.
                                                </li>
                                                <li>Utilizing Unit testing to make sure code works before pushing to
                                                    repository.
                                                </li>
                                            </ul>
                                        </MDBCardText>


                                    <hr />
                                    <MDBCardText>
                                    <MDBCardText>Full-stack PHP Laravel Developer / Merico Inc (Remote)</MDBCardText>
                                    <MDBCardText>
                                    <i className={`fa fa-calendar`}>&nbsp;</i> May 2021 - Aug 2021
                                    </MDBCardText>
                                    <MDBCardText>
                                    <ul>
                                    <li>Utilized the Laravel framework to create, maintain, update their web pages.</li>
                                    <li>Worked under an agile environment to collaborate with the team to plan and deliver new/existing projects.</li>
                                    <li>Utilized a combination of front and back-end technologies – HTML, Blade, CSS, JavaScript, Vue, React, PHP, and MySQL.</li>
                                    <li>Made frequent database calls using Laravel’s ORM/eloquent for selecting, inserting, updating, and deleting data.</li>
                                    <li>Worked on tasks that needed third party API calls to integrate single sign on social media accounts on their login page.</li>
                                    <li>Utilized the php artisan command to create controllers, models as well as creating migrations to add or crate entire new database tables and columns.</li>
                                    <li>Created new branches and made pull requests to GitLab for code review.</li>
                                    </ul>
                                    </MDBCardText>
                                    </MDBCardText>
                                    <hr />
                                    <MDBCardText>
                                    <MDBCardText>Full-stack Software Developer / RMDS Lab (Remote)</MDBCardText>
                                    <MDBCardText>
                                    <i className={`fa fa-calendar`}>&nbsp;</i> Sept 2020 - Feb 2021
                                    </MDBCardText>
                                    <MDBCardText>
                                    <ul>
                                    <li>Worked under the Drupal 8 & 9 CMS environment.</li>
                                    <li>Translated design mockups provided by UX/UI coordinator to HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.</li>
                                    <li>Back-end technologies – PHP and MySQL using Drupal syntax.</li>
                                    <li>Used the Drupal Database API syntax to manipulate database data. For example, making CRUD calls.</li>
                                    <li>Created numerous of Drupal modules to complete given task.</li>
                                    <li>Worked on their development server to test the web app before pushing it to their production server.</li>
                                    <li>Constantly updated company web pages in Drupal modules written by other programmers.</li>
                                    </ul>
                                    </MDBCardText>
                                    </MDBCardText>
                                    </div>
                                    : !activePage
                                }
                                {activePage === 2 ?
                                    <div>
                                        <MDBCardText>
                                            <MDBCardText>PHP Developer / Emac Multimedia (Remote)</MDBCardText>
                                            <MDBCardText>
                                                <i className={`fa fa-calendar`}>&nbsp;</i> Oct 2018 - Jun 2020
                                            </MDBCardText>
                                            <MDBCardText>
                                                <ul>
                                                    <li>Created a simple video search based using YouTube API.</li>
                                                    <li>A user is presented with a search box where they can type and search a particular song video.</li>
                                                    <li>Utilized Front-end technologies such as – HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.</li>
                                                    <li>PHP and MySQL – Back-end technologies used.</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardText>
                                        <hr />
                                        <MDBCardText>
                                            <MDBCardText>PHP Developer / Legacy College Prep (Remote)</MDBCardText>
                                            <MDBCardText>
                                                <i className={`fa fa-calendar`}>&nbsp;</i> Aug 2017 - Jun 2018
                                            </MDBCardText>
                                            <MDBCardText>
                                                <ul>
                                                    <li>Created an internal staffing portal website. Used mainly for teachers and administrators.</li>
                                                    <li>Used a combination of front-end technologies: HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.</li>
                                                    <li>Back-end language used: PHP along with the Laravel framework and MySQL for data storage.</li>
                                                    <li>Pushed the web application into a production server under the LEMP stack.</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardText>
                                        <hr />
                                        <MDBCardText>
                                            <MDBCardText>PHP Developer / MossBros Auto Group - Riverside, CA</MDBCardText>
                                            <MDBCardText>
                                                <i className={`fa fa-calendar`}>&nbsp;</i> July 2017 - Oct 2018
                                            </MDBCardText>
                                            <MDBCardText>
                                                <ul>
                                                    <li>Worked in an MVC framework to develop websites for mainly internal used by employees.</li>
                                                    <li>Used a combination of JavaScript, PHP, MySQL, HTML, CSS, jQuery, Bootstrap, and Ajax.</li>
                                                    <li>Tested websites on localhost as well as a development server.</li>
                                                    <li>Collaborated with other fellow web developers and IT personnel.</li>
                                                    <li>Handled multiple projects at once while juggling with other projects.</li>
                                                    <li>Managed their database and website programming tasks (primarily used PHP and MySQL).</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardText>
                                    </div>
                                    : !activePage
                                }
                                {activePage === 3 ?
                                    <div>
                                        <MDBCardText>
                                            <MDBCardText>Full-stackDeveloper / MohawkPromotions and EventRelations -
                                                EchoPark, CA</MDBCardText>
                                            <MDBCardText>
                                                <i className={`fa fa-calendar`}>&nbsp;</i> Oct 2015 - Jun 2017
                                            </MDBCardText>
                                            <MDBCardText>
                                                <ul>
                                                    <li>Worked on pre-existing code and sites collaborated with other
                                                        programmers of different areas and skill levels.
                                                    </li>
                                                    <li>Implemented new UI and templating system with Bootstrap and
                                                        JavaScript to improve UX and system flexibility.
                                                    </li>
                                                    <li>Updated text and images on existing websites in HTML files.</li>
                                                    <li>Worked under intense deadline-based web pages to accompany and work
                                                        with existing websites.
                                                    </li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardText>
                                    </div>
                                    :!activePage
                                }
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={`1`} className={`text-center align-self-center d-none d-sm-none d-md-none d-lg-block`}>
                        <MDBPaginationLink href='#' aria-label='Previous'>
                            <span onClick={() => handlePageChange(activePage + 1)} aria-hidden='true'><i className="fas fa-chevron-right fa-2x"></i></span>
                        </MDBPaginationLink>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br />
        </>
    )
};

export default Resume;