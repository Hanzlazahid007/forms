import ProfCarrer from "@/pages/components/Profcarrer";
import Profbar5 from "@/pages/components/Profbar5";

const First = () => {
  return (
    <div>
      <Profbar5 />
      <div>
        <div className="main xl:absolute xl:top-[15%] xl:left-[32%]">
          <div>
            <ProfCarrer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
