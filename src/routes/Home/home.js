import { useEffect } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import useUserInfo from "../../context/user";
import { LANDING_IMG } from "../../static";

const Home = () => {
  const navigate = useNavigate();
  const [{ user }] = useUserInfo();

  useEffect(() => {
    if (user !== null) {
      navigate(`/cp/${user?.displayName}`, { replace: true });
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Centralize – Productivity Partner</title>
      </Helmet>
      <div
        className="pt-12 text-neutral-900 bg-sky-200 border-b border-b-gray-800"
        style={{ background: "#B5EAEA" }}
      >
        <div className="container flex items-center flex-wrap lg:flex-nowrap gap-10">
          <div className="w-full min-w-300px">
            <h1 className="font-medium text-4xl lg:text-5xl mb-3">
              Feel free to be productive anywhere.
            </h1>
            <p className="my-5 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nisi aliquid perspiciatis, quibusdam aspernatur praesentium. Quia
              molestiae similique recusandae quas soluta totam ullam asperiores
              suscipit nisi, minus minima dignissimos reiciendis?
            </p>
            <Button href="/register" type="primary">
              Get Started
            </Button>
          </div>
          <div className="w-full min-w-300px">
            <img
              src={LANDING_IMG}
              className="w-full block"
              alt="Person working vector"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;