import footer from "~/resources/footer.png";
import { useNavigate } from "@remix-run/react";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex justify-center mt-6 pb-[3rem]">
        <button  className="flex justify-center" type="submit" onClick={()=> navigate('/secondPage')}>
        <img className="w-[80%]" src={footer} alt="footer" />
        </button>
      </div>
    </div>
  );
}
