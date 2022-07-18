import React, {useState} from 'react';
import {Card, List, Divider, Pagination, Table } from "semantic-ui-react";

import {StyledCardResume} from '../CardComponent/SemanticCard.styled'

const Resume = (props) => {

    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (e, data) => {
        setActivePage(data.activePage);
        //console.log(data.activePage);
        //console.log("setActive ", activePage);
    }

    return(
        <>
            <Card.Group>
                <StyledCardResume left_card>
                    <Card.Content>
                        <Card.Header>Julio Sandoval</Card.Header>
                        <Card.Description>
                            <p><span className={`fa fa-briefcase`} style={{color: `teal`}}>&nbsp;</span>Web Developer</p>
                            <p><span className={`fa fa-home`} style={{color: `teal`}}>&nbsp;</span>El Monte, CA</p>
                            <p><span className={`fa fa-envelope`} style={{color: `teal`}}>&nbsp;</span><a href="mailto:sandovaljulio2@yahoo.com">sandovaljulio2@yahoo.com</a></p>
                            <p><span className={`fa fa-github fa-lg`} style={{color: `teal`}}></span>
                                <a href="https://github.com/sourcecodeguy1?tab=repositories" target={`_blank`}> Sourcecodeguy1</a>
                            </p>
                            <p><span className={`fa fa-linkedin fa-lg`} style={{color: `teal`}}></span>
                                <a href="https://www.linkedin.com/in/julio-sandoval-ba587613a/" target={`_blank`}> Julio Sandoval</a>
                            </p>
                        </Card.Description>
                        <Divider />
                        <Card.Header><span className={`fa fa-asterisk fa-lg`} style={{color: `teal`}}>&nbsp;</span>Skills</Card.Header>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign={`center`} colspan={`2`}>Front-End</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>HTML5</Table.Cell>
                                    <Table.Cell>CSS3</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>JavaScript</Table.Cell>
                                    <Table.Cell>jQuery</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>React</Table.Cell>
                                    <Table.Cell>Bootstrap 4/5</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign={`center`} colspan={`2`}>Back-End</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>PHP</Table.Cell>
                                    <Table.Cell>MySQL</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Node Js</Table.Cell>
                                    <Table.Cell>Express</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        <Table celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign={`center`} colspan={`2`}>Source Control</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Git</Table.Cell>
                                    <Table.Cell>GitHub</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>GitLab</Table.Cell>
                                    <Table.Cell>Jira</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className={`devops`} colspan={`2`} textAlign={`center`}>DevOps</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>CI/CD</Table.Cell>
                                    <Table.Cell>Docker</Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>

                        <Divider />
                        <Card.Header><span className={`fa fa-graduation-cap fa-lg`} style={{color: `teal`}}>&nbsp;</span>Education</Card.Header>
                        <Card.Description>
                            <p>Santa Monica College - Santa Monica, CA</p>
                            <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp; Graduation: Dec 2019</i>
                                <List>
                                    <List.Item>A.S. Degree in Computer Programming</List.Item>
                                    <List.Item>A.S. Degree in Web Programmer</List.Item>
                                    <List.Item>A.S. Degree in Database Applications Developer</List.Item>
                                </List>
                            </p>
                        </Card.Description>
                    </Card.Content>
                </StyledCardResume>

                {/** Work Experience **/}

                <StyledCardResume right_card>
                    <Card.Content>

                        <Card.Header><span className={`fa fa-suitcase fa-lg`} style={{color: `teal`}}>&nbsp;</span>Work Experience</Card.Header>
                        {activePage === 1 ?
                        <Card.Description>
                            <p>Web Developer / RateSpecial LLC (Remote)</p>
                            <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> Jan 2022 -&nbsp;
                                <span style={{backgroundColor: `teal`, color: `white`, borderRadius: `5px`, padding: `7px`, fontSize: `16px`}}>Current</span>
                                <List bulleted>
                                    <List.Item>Creating landing pages for a variety of different departments for marketing, sales, accounting, and etc.</List.Item>
                                    <List.Item>Using a combination of different front-end programming languages such as HTML, CSS, and JavaScript.</List.Item>
                                    <List.Item>Utilizing Flexbox to make mobile responsive websites.</List.Item>
                                    <List.Item>Working under the Laravel framework with PHP and MySQL for back-end programming.</List.Item>
                                    <List.Item>Utilizing Bitbucket to push code under a variety of repositories.</List.Item>
                                    <List.Item>Creating Controllers, Models, and EventListeners through the php artisan command.</List.Item>
                                    <List.Item>Utilizing Unit testing to make sure code works before pushing to repository.</List.Item>
                                </List>
                            </p>

                            <Divider />

                            <p>Full-stack PHP Laravel Developer / Merico Inc (Remote)</p>
                            <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> May 2021 - Aug 2021
                                <List bulleted>
                                    <List.Item>Utilized the Laravel framework to create, maintain, update their web pages.</List.Item>
                                    <List.Item>Worked under an agile environment to collaborate with the team to plan and deliver new/existing projects.</List.Item>
                                    <List.Item>Utilized a combination of front and back-end technologies – HTML, Blade, CSS, JavaScript, Vue, React, PHP, and MySQL.</List.Item>
                                    <List.Item>Made frequent database calls using Laravel’s ORM/eloquent for selecting, inserting, updating, and deleting data.</List.Item>
                                    <List.Item>Worked on tasks that needed third party API calls to integrate single sign on social media accounts on their login page.</List.Item>
                                    <List.Item>Utilized the php artisan command to create controllers, models as well as creating migrations to add or crate entire new
                                        database tables and columns</List.Item>
                                    <List.Item>Pushed code to GitLab for senior dev to review my code before pushing to their production server.</List.Item>
                                </List>
                            </p>
                            <Divider />


                                <p>Full-stack Software Developer / RMDS Lab (Remote)</p>
                                <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> Sept 2020 - Feb 2021
                                    <List bulleted>
                                        <List.Item>Worked under the Drupal 8 & 9 CMS environment.</List.Item>
                                        <List.Item>Translated design mockups provided by UX/UI coordinator to HTML, CSS, JavaScript, jQuery, Ajax, and
                                            Bootstrap.</List.Item>
                                        <List.Item>Back-end technologies – PHP and MySQL using Drupal syntax.</List.Item>
                                        <List.Item>Used the Drupal Database API syntax to manipulate database data. For example, making CRUD calls.</List.Item>
                                        <List.Item>Created numerous of Drupal modules to complete given task.</List.Item>
                                        <List.Item>Worked on their development server to test the web app before pushing it to their production server.</List.Item>
                                        <List.Item>Constantly updated company web pages in Drupal modules written by other programmers.</List.Item>
                                    </List>
                                </p>
                            </Card.Description>
                            : !activePage
                        }

                        {activePage === 2
                            ?
                            <Card.Description>
                                <p>PHP Developer / Emac Multimedia (Remote)</p>
                                <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> Oct 2018 - Jun 2020
                                    <List bulleted>
                                        <List.Item>Scope of project – Created a simple video search based using YouTube API.</List.Item>
                                        <List.Item>Utilized Front-end technologies such as – HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap</List.Item>
                                        <List.Item>Bootstrap. PHP and MySQL – Back-end technologies used.</List.Item>
                                    </List>
                                </p>
                                <Divider />
                                <p>PHP Developer / Legacy College Prep (Remote)</p>
                                <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> Aug 2017 - Jun 2018
                                    <List bulleted>
                                        <List.Item>Created an internal staffing portal website. Used mainly for teachers and administrators.</List.Item>
                                        <List.Item>Used a combination of front-end technologies: HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap</List.Item>
                                        <List.Item>Back-end language used: PHP along with the Laravel framework and MySQL for data storage.</List.Item>
                                        <List.Item>Pushed the web application into a production server under the LEMP stack.</List.Item>
                                    </List>
                                </p>
                                <Divider />
                                <p>PHP Developer / MossBros Auto Group</p>
                                <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> July 2017 - Oct 2018
                                    <List bulleted>
                                        <List.Item>Worked in an MVC framework to develop websites for mainly internal used by employees.</List.Item>
                                        <List.Item>Used a combination of JavaScript, PHP, MySQL, HTML, CSS, jQuery, Bootstrap, and Ajax.</List.Item>
                                        <List.Item>Tested websites on localhost as well as a development server.</List.Item>
                                        <List.Item>Collaborated with other fellow web developers and IT personnel.</List.Item>
                                        <List.Item>Handled multiple projects at once while juggling with other projects.</List.Item>
                                        <List.Item>Managed their database and website programming tasks (primarily used PHP and MySQL).</List.Item>
                                    </List>
                                </p>
                            </Card.Description>
                            : !activePage
                        }

                        {activePage === 3
                            ?
                            <Card.Description>
                                <p>Full-stackDeveloper / MohawkPromotions and EventRelations</p>
                                <p style={{color: `black`}}><i className={`fa fa-calendar`}>&nbsp;</i> Oct 2015 - Jun 2017
                                    <List bulleted>
                                        <List.Item>Worked on pre-existing code and sites collaborated with other programmers of different areas and skill levels.</List.Item>
                                        <List.Item>Implemented new UI and templating system with Bootstrap and JavaScript to improve UX and
                                            system flexibility.</List.Item>
                                        <List.Item>
                                            Updated text and images on existing websites in HTML files.
                                        </List.Item>
                                        <List.Item>Worked under intense deadline-based web pages to accompany and work with existing websites.</List.Item>
                                    </List>
                                </p>
                            </Card.Description>
                            : !activePage
                        }
                    </Card.Content>

                </StyledCardResume>
            </Card.Group>

            <Card.Group>
                <StyledCardResume pagination>
                   <Card.Content>
                       <Pagination defaultActivePage={activePage} totalPages={3} onPageChange={handlePageChange}/>
                   </Card.Content>
                </StyledCardResume>
            </Card.Group>
        </>
    )
};

export default Resume;