import React from "react";
import Icon from "../Assets/Icon";
import { capitalize, keys, map, toLower } from "lodash";
import { FOOTER_DATA } from "../Data/Footer";

const BalysisFooter = () => {
  const footerDescription = keys(FOOTER_DATA);
  return (
    <div className="w-full p-4">
      <div className="absolute">
        <img src={Icon.balysisFooterLogo} />
        <div className="flex flex-row ml-14 mt-3 gap-12">
          <img src={Icon.facebook} className="w-7 h-7 cursor-pointer" />
          <a
            href="https://instagram.com/balysis?igshid=MzRlODBiNWFlZA=="
            target="blank"
          >
            <img src={Icon.instagram} className="w-7 h-7 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/blackshorts/"
            target="blank"
          >
            <img src={Icon.linkedin} className="w-7 h-7 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="justify-between flex flex-row">
        <div></div>
        <div className="flex text-blue-balysisblue font-bold flex flex-row gap-52 pr-24 text-lg items-center mt-16">
          {React.Children.toArray(
            map(footerDescription, (description) => (
              <div>
                <div className="mb-3">{capitalize(toLower(description))}</div>
                {React.Children.toArray(
                  map(
                    FOOTER_DATA[description],
                    (individualFooterDescription) => (
                      <a href={individualFooterDescription.link} target="blank">
                        <div className="font-medium text-white text-base py-1">
                          {individualFooterDescription.title}
                        </div>
                      </a>
                    )
                  )
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default BalysisFooter;
