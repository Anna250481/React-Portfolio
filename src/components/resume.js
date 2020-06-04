import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
             
                      </div>

            <h2 style={{paddingTop: '2em'}}>Anna Panayiotou</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '60%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bellevue, WA</p>
            <h5>Phone</h5>
            <p>470.443.4452</p>
            <h5>Email</h5>
            <p>silchenkovaanna@gmail.com</p>
            <h5>Web</h5>
            <p>web.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2005}
              endYear={2007}
              schoolName="College of Economy and Justice / Commoddity reserch at customs"
                 />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="University of Washington / Coding Bootcamp"
                 
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2020
            }
              jobName="Global Granite,Inc"
              jobDescription="Job Title-Account Manager. More than 5 years of Logistics,Estimation, Cost Control, 
              Budgeting,Design..."
              />

              <Experience
                startYear={2015}
                endYear={2020}
                jobName="RC GROUP"
                jobDescription="Job Title- Administrator. Mission of the company to preserve the cultural heritage of Russian-speaking immigrants in Washington state,
   create recreational opportunities for youths and adults, and promote artistic and athletic activities .
              "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Main Skills</h2>
                Javascript
               <br></br>
                
                  HTML/CSS
                  <br></br>
                  
                NodeJS
                    
                <br></br> 
                  
                      React
                      
                      


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
