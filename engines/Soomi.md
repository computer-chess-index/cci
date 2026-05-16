# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2088<sub>(+13) | 2294<sub>(-75) | 2430<sub>(-51) |  |
| 1.2.0 | 2025-12-31 | 2075<sub>(+207) | 2369<sub>(+175) | 2481<sub>(+237) |  |
| 1.1.8 | 2025-12-16 | 1868<sub>(-9) | 2194<sub>(+49) | 2244<sub>(+45) |  |
| 1.1.7 | 2025-12-07 | 1877<sub>(+54) | 2145<sub>(-50) | 2199<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1823 | 2195 | 2209 |  |
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

Generated: 2026-05-16 06:28:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1823, 1877, 1868, 2075, 2088]
  line "STC (8.0+0.08s)" [1823, 1877, 1868, 2075, 2088]
  line "LTC (60.0+0.60s)" [2195, 2145, 2194, 2369, 2294]
  line "VLTC (2m24s+1.12s)" [2209, 2199, 2244, 2481, 2430]
  line "VLTC (2m24s+1.12s)" [2209, 2199, 2244, 2481, 2430]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 34 | 284 | 50% | 2430 | 29% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2294 | 33 | 324 | 50% | 2299 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2088 | 33 | 316 | 50% | 2087 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 26 | 516 | 54% | 2448 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2369 | 27 | 460 | 50% | 2371 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2075 | 26 | 502 | 50% | 2075 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2244 | 45 | 180 | 47% | 2272 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2194 | 42 | 192 | 50% | 2194 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1868 | 47 | 164 | 48% | 1889 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2199 | 46 | 160 | 52% | 2187 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2145 | 46 | 160 | 53% | 2117 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1877 | 50 | 140 | 55% | 1821 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 50 | 152 | 43% | 2295 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2195 | 46 | 168 | 46% | 2237 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1823 | 60 | 104 | 48% | 1856 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |