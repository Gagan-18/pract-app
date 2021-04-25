import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [getError, setGetError] = useState ();  
  const enteredUsenameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setGetError({
            title: 'Invalid Name and Age',
            message: 'Please enter valid name and age (not empty)'
        })
      return;
    }
    if (+enteredAge < 1) {
        setGetError({
            title: 'Invalid Age',
            message: 'Please entered valid age (> 0)'
        })
      return;
    }

    props.onAddUsers(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
      setGetError(null);
  };
  return (
    <div>
      {getError && <ErrorModal title={getError.title} message={getError.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Usename</label>
          <input
            id="username"
            type="text"
            onChange={enteredUsenameHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={enteredAgeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
