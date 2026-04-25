# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2120<sub>(+59) | 2277<sub>(-86) | 2435<sub>(-36) |  |
| 1.2.0 | 2025-12-31 | 2061<sub>(+202) | 2363<sub>(+179) | 2471<sub>(+238) |  |
| 1.1.8 | 2025-12-16 | 1859<sub>(-8) | 2184<sub>(+48) | 2233<sub>(+45) |  |
| 1.1.7 | 2025-12-07 | 1867<sub>(+54) | 2136<sub>(-48) | 2188<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1813 | 2184 | 2198 |  |
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

Generated: 2026-04-25 06:27:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1813, 1867, 1859, 2061, 2120]
  line "STC (8.0+0.08s)" [1813, 1867, 1859, 2061, 2120]
  line "LTC (60.0+0.60s)" [2184, 2136, 2184, 2363, 2277]
  line "VLTC (2m24s+1.12s)" [2198, 2188, 2233, 2471, 2435]
  line "VLTC (2m24s+1.12s)" [2198, 2188, 2233, 2471, 2435]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>
