import { Avatar, Button, Grid, Link, Paper } from "@material-ui/core";
const CommentsCard = (props : any) => {
   const { data } = props;
    
    const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    return (
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{data.name}</h4>
          <p style={{ textAlign: "left" }}>
            {data.body}{" "}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {data.email}
          </p>
        </Grid>
      </Grid>
    )
}

export default CommentsCard;