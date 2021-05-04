import React from 'react';
import Emoji from "react-emoji-render";

import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LanguageIcon from '@material-ui/icons/Language';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


function ResultOutput (props) {

    console.log("apiData length = " + props.apiData.length)
    
    if (props.apiData.length===0) {
        return (
            <p></p>
        )
        
    }else {

   return (
       <div className="card">
           
           
           {props.apiData.map (data => {
              if (!data.description) {
               return (

                    
                    <div className="card-body" key={data.id}>

                            <BookmarkBorderIcon/>  <a href={data.html_url}>  {data.full_name} </a>
                            <p><StarIcon/> {data.stargazers_count}  <LanguageIcon/>{data.language}   <ErrorOutlineIcon/>{data.open_issues_count} issues need help</p>           
                    </div>
                    )
              } else {   
                
               return (
                    
                <div className="card-body" key={data.id}>

                        <BookmarkBorderIcon/>  <a href={data.html_url}>  {data.full_name} </a>
                        <p> <Emoji text={data.description}/> </p>
                        <p><StarIcon/> {data.stargazers_count}  <LanguageIcon/>{data.language}   <ErrorOutlineIcon/>{data.open_issues_count} issues need help</p>           
                </div>
                )
              }
           

               
               })
          

           
               
           }
       </div>
   )
        }
}
export default ResultOutput;