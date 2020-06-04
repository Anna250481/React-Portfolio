import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{ width: "80%", margin: "auto"  }}>
         
          {/*Project #1*/}
          <Grid>
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/recipes.png",
                    color: "black",
                  }}
                >
               
                </CardTitle>
                <CardText style={{whiteSpace: 'nowrap'}}>
                This is my project 1.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/xzengeric/Project1.git"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://xzengeric.github.io/Project1/project1.html"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



                        {/*Project #2*/}

            <Cell col={4}>
              <Card shadow={0} className="card">


                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/project-2.png",
                    color: "black",
                  }}
                >
                 
                </CardTitle>
                <CardText>
                  This is my project 2.
                </CardText>
                <CardActions border>
                <Button
                    href="https://github.com/solka2019/Project-2-help4u"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://four-us.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>




            {/*Project #3*/}
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/Capture-3.PNG",
                    color: "black",
                   
                  }}
                >
                  
                </CardTitle>
                <CardText>
This is my project 3.                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/solka2019/Project-3"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://chorezz.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



            {/*Project #4*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/codeQuiz.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
This is my CodeQuiz project.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Anna250481/Code-Quiz"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://anna250481.github.io/Code-Quiz/."
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>


            {/* Project 5*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/password.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                 This is a password generator.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Anna250481/Password-Generator"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://anna250481.github.io/Password-Generator/."
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

{/* Project # 6 */}
<Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/WeatherCapture.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
This is a weather app.
                </CardText>
                <CardActions border>
                  <Button






                    href="https://github.com/Anna250481/Weather-Dashboard"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://anna250481.github.io/Weather-Dashboard/."
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>


        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
            </Cell>
          </Grid>
        </div>
      );
      

    }
  }

  render() {
    return (
      <div className="category-Tabs">
        <Grid>
          <Cell col={12} style={{ margin: "auto" }}>
            <Tabs>
              <Tab style={{ fontSize: "14px", fontWeight: "bold" }}>
                My Projects
              </Tab>
            </Tabs>
          </Cell>
        </Grid>



        <section>
          <Grid>
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
