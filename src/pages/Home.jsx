import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { authentication } from "../firebase-config";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";

const initialState = {
  twitter_username: "",
  discord_username: "",
  sei_address: "",
  sei_intrest: "",
  sei_presale: "",
};

const Home = () => {
  const [formData, setformData] = useState(initialState);

  let {
    userAuth: { displayName },
    setUserAuth,
  } = useContext(UserContext);

  console.log(displayName);

  const {
    twitter_username,
    discord_username,
    sei_address,
    sei_intrest,
    sei_presale,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    // setIsDescEmpty(value.trim() === "");
  };



  const SigninTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        toast.success(re.user.reloadUserInfo.displayName);
        storeInSession("user", JSON.stringify(re.user.reloadUserInfo));
        setUserAuth(re.user.reloadUserInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const applyWaitlist  = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("twitter_username", displayName);
    postData.append("discord_username", discord_username);
    postData.append("sei_address", sei_address);
    postData.append("sei_intrest", sei_intrest);
    postData.append("sei_presale", sei_presale);

    console.log(...postData);
    console.log("clicked");

    console.log(postData);
  }
  return (
    <div>
      <Toaster />
      <Navbar />

      <div className="mx-auto flex max-w-[500px] justify-center items-center px-6">
        <div className="flex w-full flex-col items-center mt-20">
          <h1 className="text-[60px] sm:text-[100px] text-white">NOBODIES</h1>
          <p className="text-4xl text-white mb-8">On Sei</p>

          <p className="text-4xl text-white mb-8 text-center">
            Ready to join Nobodies Token Waitlist?
          </p>

          {displayName ? (
            <></>
          ) : (
            <button
              onClick={SigninTwitter}
              className="rounded-md bg-rose-600 px-7 py-3 text-xl sm:text-3xl font-bold text-white hover:bg-rose-400"
            >
              Connect Twitter
            </button>
          )}

          <form onSubmit={applyWaitlist} className="mt-8 text-white w-full px-8">
            {displayName ? (
              <div className="flex flex-col text-left mb-6">
                <label className="w-full mb-2 text-lg">
                  Twitter Username{" "}
                  <span className="text-orange-400 text-xs mb-3">
                    *(disabled)
                  </span>
                </label>
                <input
                  type="text"
                  value={displayName}

                  className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
                  disabled
                />
              </div>
            ) : (
              <div className="flex flex-col text-left mb-6">
                <label className="w-full mb-2 text-lg">
                  Twitter Username{" "}
                  <span className="text-orange-400 text-xs mb-3">
                    *(disabled)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Connect Twitter to get username"
                  value="hello"
                  name="twitter_username"
                  disabled
                  className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
                />
              </div>
            )}
            <div className="flex flex-col text-left mb-6">
              <label className="w-full mb-2 text-lg">
                Discord Username{" "}
                <span className="text-orange-400 text-sm mb-3">
                  * (required)
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={handleInputChange}
                name="discord_username"
                className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
              />
            </div>

            <div className="flex flex-col text-left mb-6">
              <label className="w-full mb-2 text-lg">
                Input Sei Address -{" "}
                <span className="text-orange-400 text-sm mb-3">
                  * (required)
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Sei Address"
                onChange={handleInputChange}
                name="sei_address"
                className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
              />
            </div>

            <div className="flex flex-col text-left mb-6">
              <label className="w-full mb-2 text-lg">
                What interests you the most about Nobodies community ?{" "}
                <span className="text-orange-400 text-sm mb-3">
                  * (required)
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Min 100 words"
                onChange={handleInputChange}
                name="sei_intrest"
                className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
              />
            </div>

            <div className="flex flex-col text-left mb-6">
              <label className="w-full mb-2 text-lg">
                Is this going to be your first Sei presale ? If Yes kindly share
                your previous experiences.{" "}
                <span className="text-orange-400 text-sm mb-3">
                  * (required)
                </span>
              </label>
              <textarea
                type="text"
                placeholder="if answer No, just Signify"
                onChange={handleInputChange}
                name="sei_presale"
                className="bg-transparent px-6 py-2 border border-rose-500 rounded-lg ring-orange-500 focus:ring-2"
              />
            </div>

            {displayName ? (
              <button className="rounded-md bg-rose-600 px-7 py-3 text-xl sm:text-3xl font-bold text-white hover:bg-rose-400">
                Apply for Waitlist
              </button>
            ) : (
              <button
                className="rounded-md bg-gray-400 px-7 py-3 text-xl sm:text-3xl 
              font-bold text-white"
                
              >
                Connect Twitter to Apply
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
