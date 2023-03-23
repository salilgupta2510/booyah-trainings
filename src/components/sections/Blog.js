import React, {useEffect, useState} from "react";
import classNames from 'classnames';
import { BlogService } from "../../services/blogService";
import { Grid, Item, Typography, ButtonBase } from "@material-ui/core";
import Image from "../elements/Image";
import { useHistory } from "react-router-dom";


const Blog = ({
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

    useEffect(() => {
        makeDataCall();
        window.scrollTo({top:0, behavior:'smooth'});
      }, []);

      const makeDataCall = () => {
        BlogService.GetAllBlogs()
        .then((response)=>{
            setAllBlogs(response.items);
        })

      }

      const routeToBlog = (blogId) =>{
        browserHistory.push(`/whykmp/${blogId}`);
      }

      const renderListOfBlogs = () =>{
        return(
          <>
            {allBlogs.length > 0 &&
            allBlogs.map((item, index) =>{
              return(
              <Grid container spacing={2} key={index} id="blog-grid">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }} onClick={()=>routeToBlog(item.blogId)}>
          <Image src={item.thumbnail} id="blog-Image" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <span id="blog-title" onClick={()=>routeToBlog(item.blogId)}>
              {item.title}
              </span>
              </Typography>
              <Typography variant="body2" gutterBottom>
              <span style={{fontSize:18, fontFamily:'franklin-gothic-compressed'}}>
              {item.description}
              </span>
              </Typography>
              <Typography variant="body2" gutterBottom id="blog-ReadMore" onClick={()=>routeToBlog(item.blogId)}>
              Read more
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
              )
            })
            }
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
    return(
        <section className="container"
         style={{ paddingTop: 0, borderWidth: 1, marginTop:12, borderColor: '#273345', borderStyle: 'solid', borderRadius: 10, padding: 20 }}
       >
       {renderListOfBlogs()}
        </section>
    )

}

export default Blog;