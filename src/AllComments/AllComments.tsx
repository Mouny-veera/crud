import { Link, Paper } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentsCard from "../Comments/CommentsCard";

const AllComments = () => {

    const [allComments, setAllComments] = useState([])
    const navigate = useNavigate();

    const getCommentsFromApi = async () => {
        try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setAllComments(data)
        } catch (err) {
         console.log(err);
            
        }
       }
     
       useEffect(() => {
         getCommentsFromApi()
       },[])
return (
    <div style={{ padding: 14  , height: "100vh" , width:'100%'}} className="App">
      <Link onClick={() => navigate('/form')}style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "25px"}}>Add Comments</Link>
      <Link onClick={() => navigate('/comments')}style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "25px"}}>View Comments From API</Link>
      <Link onClick={() => navigate('/')}style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "25px"}}>View Comments Added From Form</Link>
      {allComments.map((comment) => {
            return (
                <Paper style={{ padding: "40px 20px", marginTop: 100, width: "100%"}}>
                  <CommentsCard data={comment} />
                </Paper>
             
            )
        })}

    </div>
)
}

export default AllComments;