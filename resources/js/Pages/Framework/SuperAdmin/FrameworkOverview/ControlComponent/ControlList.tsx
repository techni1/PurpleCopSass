import React, { useEffect, useState } from "react";
export default function ControlListView({ controlList }: any) {
  const [isLongList, setIsLongList] = useState(false);
  const [controlListData, setControlListData] = useState([]);

  useEffect(() => {
    if (controlList.length > 4) {
      setIsLongList(true);
      setControlListData(controlList.slice(0, 4));
    } else {
      setControlListData(controlList);
    }
  }, [controlList]);

  return (
    <React.Fragment>
      <>
        {controlListData.map((control: any, index: any) => (
          <div
            key={`${control.id}-${index}`}
            className="bg-primary-subtle text-primary py-1 px-2 rounded me-2"
          >
            <span className="px-2">{control.code}</span>
          </div>
        ))}
        {isLongList && (
          <span className="px-2 py-1 me-2 bg-dark text-light rounded">
            +{controlList.length - 4}
          </span>
        )}
      </>
    </React.Fragment>
  );
}
