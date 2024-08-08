attribute vec3 aPositionTarget;
uniform float uProgress;
varying vec3 vColor;


#include ../includes/simlex3d.glsl

void main()
{

   // mixed position
   float noise = simplexNoise3d(position);
   noise = smoothstep(-1.0, 1.0, noise);

   float duration = 0.4;
   float delay = (1.0 - duration) * noise;
   float end = delay + duration;
   


   float progress = smoothstep(delay, end, uProgress);
   vec3 mixedPosition = mix(position, aPositionTarget, progress);


    // Final position
    vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Point size
    gl_PointSize = 20.0;

    vColor = vec3(noise);

}