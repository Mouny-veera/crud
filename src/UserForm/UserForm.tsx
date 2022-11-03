import { Link } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComment } from "../Redux/commentSlice";
import "./userform.css";

interface formInputs {
  name: string;
  email: string;
  body: string;
}

const UserForm = () => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<formInputs>();

  const onSubmit = (data : any) => {
    dispatch(addComment(data));
    navigate('/')
  };

  const navigate = useNavigate();

  return (
    <>
    <Link onClick={() => navigate('/')}style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "25px"}}>View Comments</Link>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} placeholder="Kotaro" />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          placeholder="bluebill1049@hotmail.com"
          type="email"
        />
      </div>
      <div>
        <label>Comments</label>
        <textarea {...register("body")} placeholder="Sugawara" />
      </div>
      <input type="submit" />
    </form>
    </>
  );
}
export default UserForm;
