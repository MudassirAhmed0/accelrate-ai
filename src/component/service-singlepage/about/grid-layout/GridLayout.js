import React from "react";

const GridLayout = ({ grids }) => {
  return (
    <section>
      <div className="myContainer py1">
        <h2 className="text-center shadow-lg p-6 border border-gray-700 rounded-lg">
          APPLICATIONS
        </h2>
        <div className="about_grid_container w-full mt-12 lg:h-[650px] overflow-auto lg:overflow-visible hideScroll">
          {grids.map((grid, index) => (
            <div
              key={index}
              className="flex justify-center p-5 border border-gray-700 rounded-lg min-w-[200px] shadow-lg"
              style={{ gridArea: grid.area }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="size-24 border rounded-full flex items-center justify-center shadow-lg">
                  <div className="lg:text40 mtext22">{grid.icon}</div>
                </div>
                <p className="lg:text24 mtext18 mt30 font-medium">
                  {grid.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridLayout;
