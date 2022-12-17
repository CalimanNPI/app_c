import { Canvas, Blur, Image, useImage } from "@shopify/react-native-skia";
import { P_DATA } from "@env";

export default function BlurComponent() {
  const uriIMG = P_DATA + "instalaciones/Árbol.png";
  const image = useImage(uriIMG);
  if (!image) {
    return null;
  }
  return (
    <Canvas style={{ flex: 1 }}>
      <Image x={0} y={0} width={200} height={256} image={image} fit="cover">
        <Blur blur={4} />
      </Image>
    </Canvas>
  );
}
