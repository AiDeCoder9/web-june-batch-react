import AvatarImage from "./assets/image.png";
function UserProfile() {
  return (
    <div>
      <img src={AvatarImage} alt="Avatar" />
      <h2>Sajan</h2>
      <p>sajanproject@gmail.com</p>
      <button>Contact</button>
    </div>
  );
}

export default UserProfile;
