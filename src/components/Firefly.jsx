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
  size = 96,       // still used for large screens if needed
  className = "",
}) {

  const src = MAP[color] || yellow;

  const style = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
    // REMOVE width here so Tailwind controls it
    pointerEvents: "none",
  };

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={style}
      className={`
        firefly noselect
        w-8   /* tiny screens */
        sm:w-12 /* small screens */
        md:w-16 /* medium */
        lg:w-[${size}px] /* large screens keep original size */
        ${className}
      `}
    />
  );
}

