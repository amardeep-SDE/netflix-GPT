import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES, NETFLIX_LOGO } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.movies?.showGptSearch);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
      return () => unsubscribe();
    });
  }, []);


  return (
    <div className="w-full flex justify-between items-center absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <img src={user?.photoURL} alt="user" className="w-10 rounded-full" />
          <button onClick={handleSignOut} className="text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
