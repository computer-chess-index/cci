# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3005<sub>(+135) | 3239<sub>(+112) | 3274<sub>(+80) |  |
| 5 | 2026-04-06 | 2870<sub>(+35) | 3127<sub>(+53) | 3194<sub>(+75) |  |
| 4 | 2025-12-05 | 2835<sub>(+new) | 3074<sub>(+new) | 3119<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A2to6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-19 06:24:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2835, 2870, 3005]
  line "STC (8.0+0.08s)" [2835, 2870, 3005]
  line "LTC (60.0+0.60s)" [3074, 3127, 3239]
  line "VLTC (2m24s+1.12s)" [3119, 3194, 3274]
  line "VLTC (2m24s+1.12s)" [3119, 3194, 3274]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 35 | 212 | 52% | 3258 | 67% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 36 | 202 | 52% | 3221 | 62% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3005 | 30 | 320 | 46% | 3035 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 25 | 438 | 48% | 3216 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3127 | 28 | 358 | 50% | 3125 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2870 | 28 | 396 | 49% | 2882 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 26 | 428 | 50% | 3119 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 27 | 376 | 53% | 3048 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2835 | 25 | 482 | 53% | 2803 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |