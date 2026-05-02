# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2095<sub>(+23) | 2310<sub>(-55) | 2433<sub>(-44) |  |
| 1.2.0 | 2025-12-31 | 2072<sub>(+206) | 2365<sub>(+174) | 2477<sub>(+237) |  |
| 1.1.8 | 2025-12-16 | 1866<sub>(-8) | 2191<sub>(+50) | 2240<sub>(+45) |  |
| 1.1.7 | 2025-12-07 | 1874<sub>(+54) | 2141<sub>(-50) | 2195<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1820 | 2191 | 2205 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Soomi+<version>&body=###%20Engine%20name%0ASoomi%0A%0A###%20Version%0A1.2.0B" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-02 06:28:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2095]
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2095]
  line "LTC (60.0+0.60s)" [2191, 2141, 2191, 2365, 2310]
  line "VLTC (2m24s+1.12s)" [2205, 2195, 2240, 2477, 2433]
  line "VLTC (2m24s+1.12s)" [2205, 2195, 2240, 2477, 2433]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>
