import { useNavigate, useSearchParams } from 'react-router-dom'

function Profile() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('profile'))

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <button onClick={()=>navigate('/')}>Back home</button>
    </div>
  );
}

export default Profile;
