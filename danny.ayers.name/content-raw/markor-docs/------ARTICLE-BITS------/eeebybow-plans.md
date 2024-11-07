# EEEByBow Construction Plan

## 1. Single-String Test Platform
- [ ] String mount construction
  - [ ] Build rigid test frame (~50cm length)
  - [ ] Install guitar tuner
  - [ ] Mount bridge and saddle
  - [ ] Install string (recommend starting with D string)

- [ ] Pickup testing
  - [ ] Mount pickup at 1/4 position from bridge
  - [ ] Connect to oscilloscope
  - [ ] Measure baseline output voltage range
  - [ ] Document frequency response

- [ ] Solenoid prototype
  - [ ] Disassemble audio transformer
  - [ ] Test core removal method
  - [ ] Wind test coil (start with 100 turns)
  - [ ] Mount test assembly
  - [ ] Measure force vs current relationship
  - [ ] Test frequency response
  - [ ] Optimize coil parameters

- [ ] Amplifier setup
  - [ ] Test class D module frequency response
  - [ ] Measure power consumption
  - [ ] Test thermal characteristics
  - [ ] Verify clean switching behavior

## 2. Control System Prototype
- [ ] ESP32 Setup
  - [ ] Install PlatformIO
  - [ ] Configure for maximum CPU frequency (240MHz)
  - [ ] Enable IRAM optimization
  - [ ] Configure ADC DMA mode

- [ ] Input Interface
  - [ ] Wire button matrix
  - [ ] Implement hardware debouncing
  - [ ] Configure GPIO interrupts
  - [ ] Test response time

- [ ] OLED Display
  - [ ] Connect via I2C
  - [ ] Create basic UI framework
  - [ ] Implement status display
  - [ ] Add parameter adjustment interface

- [ ] ADC System
  - [ ] Configure ADC1 for maximum sampling rate
  - [ ] Implement circular buffer
  - [ ] Test sustained sampling rate
  - [ ] Measure actual latency

- [ ] Output System
  - [ ] Configure LEDC (hardware PWM) channels
  - [ ] Test maximum reliable frequency
  - [ ] Measure jitter
  - [ ] Implement phase-accurate switching

## 3. Feedback Loop Testing
- [ ] Single String Tests
  - [ ] Implement basic feedback path
  - [ ] Measure total system latency
  - [ ] Test different filter configurations
  - [ ] Optimize DSP parameters

- [ ] Performance Optimization
  - [ ] Profile CPU usage
  - [ ] Optimize critical paths
  - [ ] Test different buffer sizes
  - [ ] Document tradeoffs

- [ ] Drive Strategies
  - [ ] Test PWM frequency ranges
  - [ ] Implement burst mode
  - [ ] Test phase tracking
  - [ ] Optimize attack characteristics

## 4. Full Prototype Assembly
- [ ] Guitar Modification
  - [ ] Design solenoid mounting plate
  - [ ] Create pickup routing template
  - [ ] Plan cable management
  - [ ] Design control panel layout

- [ ] Solenoid Array
  - [ ] Build 6 matched solenoids
  - [ ] Create alignment jig
  - [ ] Install mounting system
  - [ ] Test clearances

- [ ] Power System
  - [ ] Design power distribution
  - [ ] Implement protection circuitry
  - [ ] Add power monitoring
  - [ ] Test thermal management

- [ ] Final Integration
  - [ ] Mount all components
  - [ ] Test all strings
  - [ ] Calibrate response
  - [ ] Document performance

## Technical Notes

### DSP Implementation
The LEDC (LED Control) peripheral is ESP32's hardware PWM generator, capable of high-frequency operation independent of CPU. Key advantages:
- Hardware-based timing
- Phase-accurate operation
- Multiple channels for independent string control
- Up to 80MHz base clock

### Latency Optimization
1. Use IRAM_ATTR for critical functions
2. Enable core affinity for DSP task
3. Implement zero-copy buffer strategy
4. Use hardware PWM for output
5. Consider dual-core processing:
   - Core 0: UI and system control
   - Core 1: DSP and feedback loop

### Initial Drive Strategy
1. Detect string selection
2. Generate short (~10ms) burst at estimated resonant frequency
3. Monitor pickup response
4. Phase-lock to detected vibration
5. Maintain resonance through feedback

### Safety Considerations
- Implement current limiting
- Monitor temperature
- Add emergency stop function
- Protect against feedback runaway