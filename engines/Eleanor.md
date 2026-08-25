# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3163<sub>(+43) | 3393<sub>(+22) | 3421<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3120<sub>(+95) | 3371<sub>(+119) | 3395<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3025 | 3252 | 3321 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3025, 3120, 3163]
  line "STC (8.0+0.08s)" [3025, 3120, 3163]
  line "LTC (60.0+0.60s)" [3252, 3371, 3393]
  line "VLTC (2m24s+1.12s)" [3321, 3395, 3421]
  line "VLTC (2m24s+1.12s)" [3321, 3395, 3421]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 23 | 456 | 49% | 3425 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3393 | 25 | 394 | 50% | 3394 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3163 | 26 | 400 | 51% | 3154 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 29 | 284 | 50% | 3395 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 30 | 280 | 50% | 3370 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3120 | 32 | 264 | 50% | 3119 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3321 | 26 | 368 | 50% | 3324 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3252 | 27 | 358 | 52% | 3224 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3025 | 24 | 496 | 52% | 2997 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |