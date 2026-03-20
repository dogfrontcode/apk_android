import Document from "@/components/Molecules/Document";
import { Colors } from "@/constants/Colors";
import * as React from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

type SlideKey = 'front' | 'back' | 'sign' | 'qr';
const data: SlideKey[] = ['front', 'back', 'sign', 'qr'];
const slideComponents: Record<SlideKey, React.FC> = {
    front: Document.Front,
    back: Document.Back,
    sign: Document.Sign,
    qr: Document.QRcode,
};
const width = Dimensions.get("window").width * 0.85;

function App() {
  const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index,
      animated: false,
    });
  };

  return (
    <View style={{ flex: 1, marginBottom: 20, width: width, alignSelf: "center" }}>
      <Carousel
        ref={ref}
        width={width}
        height={width *  1.5}
        autoPlay={false}
        data={data}
        onProgressChange={progress}
        renderItem={({ item }) => {
          const SlideComponent = slideComponents[item];
          return <View style={{ height: width * 1.5, justifyContent: "center", alignItems: "center" }}><SlideComponent /></View>;
        }}
        loop={false}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderRadius: 50 }}
        activeDotStyle={{ backgroundColor: Colors.primary, borderRadius: 50 }}
        containerStyle={{ gap: 5, marginVertical: -10, marginBottom: 5 }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default App;
