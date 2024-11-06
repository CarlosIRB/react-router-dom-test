
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const { id } = useParams();
    return (
      <>
        <div>Users</div>
  
        <p>{`User ID: = ${id}`}</p>
      </>
    );
}

export default UserPage