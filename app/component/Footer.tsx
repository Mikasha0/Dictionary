import footer from "~/resources/footer.png";
export default function Footer() {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-6 pb-[3rem]">
        <img className="w-[70%]" src={footer} alt="footer" />
      </div>
    </div>
  );
}
