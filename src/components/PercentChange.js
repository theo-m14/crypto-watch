import { useEffect, useState } from "react";
import colors from "../styles/_settings.scss";

const PercentChange = ({ percentage }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percentage) {
      if (percentage >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percentage]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percentage ? percentage.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
