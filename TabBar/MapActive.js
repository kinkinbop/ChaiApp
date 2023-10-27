import React from 'react';
import Svg, { Path, Defs, ClipPath, G  } from 'react-native-svg';

const MapActive = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    fill="none"
    viewBox="0 0 32 58"
  >
    <Path
      fill="#FE9300"
      fillRule="evenodd"
      d="M14.465 46.879q-.016.531-.098 1.05-.078.52-.191 1.016-.047.239-.176.422-.129.188-.379.305-.246.121-.621.2-.375.081-.934.097-2.035.097-4.066 0-.559-.016-.96-.114-.4-.093-.65-.312-.245-.215-.359-.59-.11-.375-.11-.984v-5.567l-1.394.477-.27-1.117 1.665-.563v-3.804l1.137.078v3.343l1.886-.625V36l1.153.082v3.727l3.328-1.121-.211 5.617q-.016.449-.098.746-.078.293-.262.476-.183.184-.488.282-.3.097-.781.144l-.64.063-.383-1.153.671-.062q.254-.016.414-.07.16-.06.247-.169.09-.113.128-.304.043-.192.059-.496.016-.145.031-.657.016-.511.04-1.101.023-.594.046-1.106.028-.511.028-.656l-2.13.735v6.351H8.946V41.36l-1.886.657v5.457q0 .418.03.668.032.246.15.39.12.14.343.207.227.063.594.078 1.71.098 3.426 0 .78-.047 1.109-.168.328-.12.426-.504.097-.398.144-.831.047-.434.063-.817l1.12.383zm-9.137-.156l.082.492q-.465.21-1.12.484-.657.27-1.372.551-.711.277-1.375.52-.664.238-1.11.382L0 48.047q.45-.125 1.031-.324.586-.203 1.211-.426v-5.809H.45v-1.12h1.793V36.32l1.102.047v4h1.68v1.121h-1.68v5.39q.562-.222 1.039-.421.48-.2.851-.36l.094.626zm23.842-10V50.48h-1.121v-.895h-9.953v.895h-1.118V36.722H29.17zm-1.121 11.82V37.777h-9.953v10.766h9.953zm-4.063-6.254q.88.383 1.871.664.992.281 2.13.535l-.45.992q-1.41-.382-2.5-.78-1.086-.403-1.98-.884-.895.465-1.985.891-1.086.422-2.48.836l-.43-.895q1.2-.336 2.176-.68.976-.343 1.789-.71-.91-.61-1.727-1.473-.32.352-.672.664-.351.313-.718.617l-.547-.707q.433-.351.855-.78.426-.434.801-.888.379-.457.7-.914.32-.457.558-.87l.879.366q-.305.528-.688 1.086h4.977v.848q-.61.61-1.227 1.121-.613.512-1.332.961zm-2.976-2.082q.91.977 2.03 1.602 1.298-.703 2.145-1.602H21.01zm-.16 3.633q.398.05.996.172.601.117 1.234.254.633.136 1.23.289.602.148 1.036.277l-.145.977q-.418-.16-1.012-.336-.59-.176-1.222-.328-.63-.153-1.23-.262-.598-.114-1.016-.16l.128-.883zm-1.137 1.984q.593.047 1.449.192.855.144 1.75.328.898.183 1.73.394.832.207 1.407.399l-.176.992q-.578-.223-1.41-.453-.832-.235-1.719-.426-.887-.191-1.727-.336-.84-.145-1.433-.191l.129-.899z"
    ></Path>
    <Path
      fill="#FE9300"
      fillRule="nonzero"
      d="M15.587 14.814a4.257 4.257 0 003.03-1.261 4.258 4.258 0 001.261-3.03 4.258 4.258 0 00-1.26-3.031 4.258 4.258 0 00-3.031-1.261c-1.149 0-2.222.47-3.031 1.28a4.258 4.258 0 00-1.261 3.03 4.272 4.272 0 004.292 4.273zm-2.222-6.513a3.13 3.13 0 012.24-.922c.848 0 1.638.32 2.24.922a3.13 3.13 0 01.923 2.24c0 .847-.34 1.619-.941 2.221a3.13 3.13 0 01-2.24.923 3.13 3.13 0 01-2.24-.923 3.13 3.13 0 01-.923-2.24c0-.847.34-1.618.941-2.22zm2.222 16.32l7.209-7.21a10.171 10.171 0 002.993-7.209c0-2.71-1.054-5.29-2.993-7.209C20.876 1.054 18.316 0 15.586 0c-2.729 0-5.27 1.054-7.209 2.993a10.139 10.139 0 00-2.993 7.21c0 2.729 1.054 5.289 2.993 7.209l7.21 7.21zm-6.4-20.837a9 9 0 016.4-2.655c2.409 0 4.706.942 6.418 2.655a9.011 9.011 0 012.655 6.418 9.011 9.011 0 01-2.655 6.42l-6.418 6.418-6.4-6.419a9.012 9.012 0 01-2.655-6.419c0-2.428.942-4.706 2.655-6.418zm21.929 25.242l-3.219-11.181c-.188-.64-.866-1.11-1.6-1.11H24.51a.555.555 0 00-.565.564c0 .32.245.564.565.564h1.788c.245 0 .47.17.508.302l3.22 11.18c.037.152.037.302-.02.377-.037.057-.113.095-.226.095H1.394a.312.312 0 01-.226-.095c-.057-.075-.076-.226-.02-.376l3.22-11.181c.037-.113.263-.302.508-.302h1.882c.32 0 .565-.244.565-.564a.555.555 0 00-.565-.565H4.876c-.734 0-1.412.47-1.6 1.11l-3.2 11.182c-.15.508-.075.997.207 1.374.264.339.659.527 1.13.527h28.385c.452 0 .866-.188 1.13-.527.263-.377.339-.866.188-1.374z"
    ></Path>
  </Svg>
  );
};

export default MapActive;