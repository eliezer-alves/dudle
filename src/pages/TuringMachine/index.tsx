import { Canvas } from '../../components/Canvas';

export function TuringMachine() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas width="640" height="480" style={{'background': 'white'}} />
    </div>
  );
}