import millenniumIcon from './images/millennium-icon.svg';

export function TopBar() {
  return (
    <div className="w-full h-62 flex justify-start items-center bg-gray-eli-2 py-6 px-24">
      <img className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200" src={millenniumIcon} alt="" />
    </div>
  );
}