#version 300 es
precision highp float;

in vec2 sourceUV;

out vec4 outColor;

uniform vec2 resolution;
uniform sampler2D sourceTexture;
uniform float glowStrength;

void main() {
    vec4 color = texture(sourceTexture, sourceUV);
    
    float defaultGlowStrength = 0.6;
    float effectiveGlowStrength = glowStrength > 0.0 ? glowStrength : defaultGlowStrength;

    float blurSize = 3.0 / resolution.x;
    
    vec4 glow = vec4(0.0);
    
    // Sample surrounding pixels for glow effect
    for (int x = -4; x <= 4; x++) {
        for (int y = -4; y <= 4; y++) {
            vec2 offset = vec2(x, y) * blurSize;
            glow += texture(sourceTexture, sourceUV + offset);
        }
    }
    
    glow /= 81.0; // Normalize samples
    glow *= effectiveGlowStrength; // Adjust intensity
    
    outColor = color + glow; // Combine glow with original color
    outColor.a = color.a; // Preserve original alpha
}