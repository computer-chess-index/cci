# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3004<sub>(+133) | 3235<sub>(+107) | 3275<sub>(+80) |  |
| 5 | 2026-04-06 | 2871<sub>(+35) | 3128<sub>(+53) | 3195<sub>(+75) |  |
| 4 | 2025-12-05 | 2836<sub>(+new) | 3075<sub>(+new) | 3120<sub>(+new) |  |
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

Generated: 2026-07-23 06:24:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2836, 2871, 3004]
  line "STC (8.0+0.08s)" [2836, 2871, 3004]
  line "LTC (60.0+0.60s)" [3075, 3128, 3235]
  line "VLTC (2m24s+1.12s)" [3120, 3195, 3275]
  line "VLTC (2m24s+1.12s)" [3120, 3195, 3275]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 34 | 228 | 52% | 3262 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3235 | 35 | 214 | 52% | 3224 | 62% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3004 | 29 | 332 | 46% | 3035 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 25 | 438 | 48% | 3218 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 28 | 358 | 50% | 3127 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2871 | 28 | 396 | 49% | 2884 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 26 | 428 | 50% | 3120 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3075 | 27 | 376 | 53% | 3050 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2836 | 25 | 482 | 53% | 2804 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |