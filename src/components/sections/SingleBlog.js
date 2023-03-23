import React, {useEffect, useState} from "react";
import classNames from 'classnames';
import { BlogService } from "../../services/blogService";
import { Grid, Item, Typography, ButtonBase } from "@material-ui/core";
import Image from "../elements/Image";
import { useParams, useHistory } from "react-router-dom";


const SingleBlog = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  }) => {
    const browserHistory = useHistory();

    const[allBlogs, setAllBlogs] = useState([]);
    const[previousTitle, setPreviousTitle] = useState('');
    const[nextTitle, setNextTitle] = useState('');
    
    const id = useParams();
    const paramId = id.id;
    const[currentSelectedBlogId, setCurrentSelectedBlogId] = useState(0);


    useEffect(() => {
        makeDataCall();
        window.scrollTo({top:0, behavior:'smooth'});
      }, []);

      const makeDataCall = () => {
        BlogService.GetAllBlogs()
        .then((response)=>{
            setAllBlogs(response.items);
            // setCurrentSelectedBlogId(response.items[0].blogId)
            setCurrentSelectedBlogId(parseInt(paramId));
            //the first blog
            if(parseInt(paramId) === response.items[0].blogId){
              setPreviousTitle('');
              setNextTitle(response.items[1].title);
            }
            //The last blog
            else if(parseInt(paramId) === response.items[response.items.length-1].blogId){
              setPreviousTitle(response.items[response.items.length-2].title);
              setNextTitle('');
            }
            //neither the first or the last blog
            else{
              const currentElementIndex = getIndexOfCurrentElement(parseInt(paramId), response.items);
              setPreviousTitle(response.items[currentElementIndex-1].title);
              setNextTitle(response.items[currentElementIndex+1].title);
            }
        })

      }

      const getIndexOfCurrentElement = (currentBlogId, blogsArray) =>{
        const currentElement = blogsArray.find(x=>x.blogId === currentBlogId);
        const currentElementIndex = blogsArray.indexOf(currentElement);
        return currentElementIndex;
      }


      const getNextElement = ()=>{
        if(allBlogs.length > 0){
          //get the current element on display
          const currentElement = allBlogs.find(x=>x.blogId === currentSelectedBlogId);
          //get the index of that element
          const currentElementIndex = allBlogs.indexOf(currentElement);
          //check if this was not the last element
          if(currentElementIndex != allBlogs.length-1){
            setPreviousTitle(currentElement.title);
            setCurrentSelectedBlogId(allBlogs[currentElementIndex+1].blogId);
            setNextTitle(currentElementIndex+2 <= allBlogs.length-1 ? allBlogs[currentElementIndex+2].title : '');
            browserHistory.push(`/whykmp/${allBlogs[currentElementIndex+1].blogId}`)
          }
        }
        window.scrollTo({top:0, behavior:'smooth'});

      }

      const getPreviousElement = ()=>{
        if(allBlogs.length > 0){
          //get the current element on display
          const currentElement = allBlogs.find(x=>x.blogId === currentSelectedBlogId);
          //get the index of that element
          const currentElementIndex = allBlogs.indexOf(currentElement);
          //check if this was not the last element
          if(currentElementIndex > 0){
            setPreviousTitle(currentElementIndex-2 >= 0 ? allBlogs[currentElementIndex-2].title : '');
            setCurrentSelectedBlogId(allBlogs[currentElementIndex-1].blogId);
            setNextTitle(allBlogs[currentElementIndex].title);
            browserHistory.push(`/whykmp/${allBlogs[currentElementIndex-1].blogId}`)
          }
        }
        window.scrollTo({top:0, behavior:'smooth'});

      }


      const renderSingleBlog = () =>{
        return(
          <>

          <Grid container spacing={2}>
        <Grid item xs={12}>
        <div>
        {allBlogs.length > 0  && currentSelectedBlogId > 0 && 
          <div dangerouslySetInnerHTML={{ __html:allBlogs.find(x => x.blogId == currentSelectedBlogId).htmlContent}}></div>
            }
        </div>
</Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop:50}}>
       <Grid item xs={6}>
       {allBlogs.length>0 && currentSelectedBlogId != allBlogs[0].blogId &&
       <div id="prevNextSpan" onClick={() => getPreviousElement()}>
       <i class="fa fa-arrow-left fa-lg" aria-hidden="true"   style={{marginRight:10}}></i>
        <span style={{textDecoration:'underline'}} >
        {previousTitle}
        </span>
       </div>
       }
       </Grid>
       <Grid item xs={6} style={{textAlign:'end'}}>
       {allBlogs.length>0 && currentSelectedBlogId != allBlogs[allBlogs.length-1].blogId &&
       <div id="prevNextSpan" onClick={() => getNextElement()}>
       <span style={{textDecoration:'underline'}}>
       {nextTitle}
       </span>
       <i class="fa fa-arrow-right fa-lg" aria-hidden="true" style={{marginLeft:10}}></i>
       </div>}
       </Grid>
       </Grid>
          </>
        )
      }

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );

      const history = useHistory();

      const routeToQueryForm = () => {
        history.push('/queryForm');
      }

    return(
        <section className="container"
         style={{ paddingTop: 0, borderWidth: 1, marginTop:12, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
       >
       <div id="blog-link" onClick={routeToQueryForm}>Register for KMP Workshop</div>
       {renderSingleBlog()}
        </section>
    )

}

export default SingleBlog;