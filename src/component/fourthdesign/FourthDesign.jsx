import Classcomponent from "./ClassComponent";
import Demo from "./demo";
import PickBazarPage from "./PickBazarPage";
import Profile from "./Profile";

const FourthDesign = () => {
  return (
    <>
      <PickBazarPage />
      <Demo />
      <Profile text={{ name: "vikas" }} data="vikasdata" />
      <Classcomponent data="vikasdhakerrrrrrrrrrrr" />
    </>
  );
};
export default FourthDesign;
