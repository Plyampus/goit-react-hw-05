import BarLoader from "react-spinners/BarLoader";
import css from "/src/components/Loader/Loader.jsx";

export default function Loader() {
  return (
    <div className="container">
      <div className={css.loader}>
        <BarLoader
          color="fuchsia"
          cssOverride={null}
          size={15}
          width={100}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}
