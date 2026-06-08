# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5 | 2026-04-06 | 2870<sub>(+36) | 3128<sub>(+55) | 3193<sub>(+77) |  |
| 4 | 2025-12-05 | 2834<sub>(+new) | 3073<sub>(+new) | 3116<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:23:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2834, 2870]
  line "STC (8.0+0.08s)" [2834, 2870]
  line "LTC (60.0+0.60s)" [3073, 3128]
  line "VLTC (2m24s+1.12s)" [3116, 3193]
  line "VLTC (2m24s+1.12s)" [3116, 3193]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3193 | 26 | 410 | 48% | 3212 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 29 | 330 | 51% | 3123 | 57% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2870 | 30 | 352 | 49% | 2881 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3116 | 26 | 428 | 50% | 3117 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 27 | 376 | 53% | 3046 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2834 | 25 | 482 | 53% | 2801 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |