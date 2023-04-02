import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Text } from '@react-three/drei';

const NameDescription = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Text position={[-2, 1, 0]} fontSize={1} color="black">
        Satyam Patel
      </Text>
      <Text position={[-2, -1, 0]} fontSize={0.5} color="black">
        Web Developer
      </Text>
    </Canvas>
  );
};

export default NameDescription;
