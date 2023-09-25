import { keys, map } from "lodash";
import React from "react";
import { BALYSIS_FEATURE, BALYSIS_FEATURE_DESCRIPTION } from "./Constant";

const Feature = () => {
  return (
    <div className="h-screen bg-white">
      <div className="font-montserrat text-6xl font-bold flex justify-center mt-28">
        Features
      </div>
      <div className="flex flex-row w-full mt-12 gap-3 px-4">
        {React.Children.toArray(
          map(keys(BALYSIS_FEATURE), (e) => (
            <FeatureCard
              title={BALYSIS_FEATURE[e]}
              featurePlans={BALYSIS_FEATURE_DESCRIPTION[e]}
            />
          ))
        )}
      </div>
    </div>
  );
};

const FeatureCard = ({ title = "", featurePlans = [] }) => {
  return (
    <div className="w-1/3 rounded-lg feature-card px-8 pb-3">
      <div className="pt-8 text-blue-balysisblue text-3xl font-semibold font-montserrat">
        {title}
      </div>
      <div className="pt-6">
        <ul>
          {React.Children.toArray(
            map(featurePlans, (e) => <li className="list-disc py-3">{e}</li>)
          )}
        </ul>
      </div>
      <button className='bg-blue-balysisblue rounded-lg py-2 px-6 text-white text-base font-semibold -ml-2 w-full mt-5'>Explore</button>
    </div>
  );
};

export default Feature;
