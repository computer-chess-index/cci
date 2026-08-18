# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3005<sub>(+129) | 3233<sub>(+100) | 3281<sub>(+79) |  |
| 5 | 2026-04-06 | 2876<sub>(+36) | 3133<sub>(+52) | 3202<sub>(+77) |  |
| 4 | 2025-12-05 | 2840 | 3081 | 3125 |  |
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

Generated: 2026-08-18 06:24:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2840, 2876, 3005]
  line "STC (8.0+0.08s)" [2840, 2876, 3005]
  line "LTC (60.0+0.60s)" [3081, 3133, 3233]
  line "VLTC (2m24s+1.12s)" [3125, 3202, 3281]
  line "VLTC (2m24s+1.12s)" [3125, 3202, 3281]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 28 | 332 | 50% | 3278 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 29 | 314 | 50% | 3231 | 63% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3005 | 26 | 420 | 47% | 3027 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3202 | 25 | 438 | 48% | 3224 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 28 | 358 | 50% | 3132 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2876 | 28 | 396 | 49% | 2888 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3125 | 26 | 428 | 50% | 3125 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3081 | 27 | 376 | 53% | 3054 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2840 | 25 | 482 | 53% | 2808 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |