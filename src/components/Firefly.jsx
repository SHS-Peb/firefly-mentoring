import yellow from "../assets/svg/firefly-yellow.svg";
import blue   from "../assets/svg/firefly-blue.svg";
import pink   from "../assets/svg/firefly-pink.svg";
import green  from "../assets/svg/firefly-green.svg";

// Maps the "color" prop to the imported SVG asset
const MAP = {
  yellow,
  blue,
  pink,
  green,
};

export default function Firefly({
  top,
  left,
  right,
  bottom,
  color = "yellow",
  size = 96,       // width in pixels
  className = "",  // optional utility classes
}) {

  const src = MAP[color] || yellow;

  // Inline style supports top/left/right/bottom positioning
  const style = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
    width: size,
    height: "auto",
    pointerEvents: "none", // stops random selection/click blocking
  };

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={style}
      className={`firefly noselect ${className}`}
    />
  );
}
