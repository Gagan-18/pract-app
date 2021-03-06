import classes from './AddUser.module.css';
import Card from '../UI/Card';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Usename</label>
            <input id="username" type='text' />
            <label htmlFor="age">Age</label>
            <input id="age" type='number' />
            <button type='submit'>Add User</button>
        </form>
        </Card>
    );
};

export default AddUser;