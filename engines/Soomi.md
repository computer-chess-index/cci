# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2087<sub>(+11) | 2296<sub>(-73) | 2430<sub>(-51) |  |
| 1.2.0 | 2025-12-31 | 2076<sub>(+206) | 2369<sub>(+174) | 2481<sub>(+236) |  |
| 1.1.8 | 2025-12-16 | 1870<sub>(-7) | 2195<sub>(+48) | 2245<sub>(+44) |  |
| 1.1.7 | 2025-12-07 | 1877<sub>(+53) | 2147<sub>(-48) | 2201<sub>(-8) |  |
| 1.1.6 | 2025-11-30 | 1824 | 2195 | 2209 |  |
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

Generated: 2026-05-17 06:28:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1824, 1877, 1870, 2076, 2087]
  line "STC (8.0+0.08s)" [1824, 1877, 1870, 2076, 2087]
  line "LTC (60.0+0.60s)" [2195, 2147, 2195, 2369, 2296]
  line "VLTC (2m24s+1.12s)" [2209, 2201, 2245, 2481, 2430]
  line "VLTC (2m24s+1.12s)" [2209, 2201, 2245, 2481, 2430]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 34 | 284 | 50% | 2431 | 29% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2296 | 33 | 328 | 50% | 2299 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2087 | 33 | 328 | 50% | 2084 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 26 | 516 | 54% | 2448 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2369 | 27 | 460 | 50% | 2372 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2076 | 26 | 502 | 50% | 2076 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2245 | 45 | 180 | 47% | 2273 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2195 | 42 | 192 | 50% | 2195 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1870 | 47 | 164 | 48% | 1889 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 46 | 160 | 52% | 2188 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2147 | 46 | 160 | 53% | 2117 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1877 | 50 | 140 | 55% | 1823 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 50 | 152 | 43% | 2296 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2195 | 46 | 168 | 46% | 2238 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1824 | 60 | 104 | 48% | 1858 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |