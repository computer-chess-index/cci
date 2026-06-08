# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3141<sub>(+35) | 3379<sub>(+23) | 3405<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3106<sub>(+93) | 3356<sub>(+119) | 3379<sub>(+73) |  |
| 3.0 | 2025-12-05 | 3013<sub>(+new) | 3237<sub>(+new) | 3306<sub>(+new) |  |
| 2.0 | 2025-08-23 |  |  |  |  |
| 1.0 | 2025-06-02 |  |  |  |  |
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

Generated: 2026-06-08 06:24:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3013, 3106, 3141]
  line "STC (8.0+0.08s)" [3013, 3106, 3141]
  line "LTC (60.0+0.60s)" [3237, 3356, 3379]
  line "VLTC (2m24s+1.12s)" [3306, 3379, 3405]
  line "VLTC (2m24s+1.12s)" [3306, 3379, 3405]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 26 | 352 | 49% | 3413 | 81% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 28 | 318 | 50% | 3379 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3141 | 29 | 320 | 50% | 3137 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 29 | 284 | 50% | 3380 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 30 | 280 | 50% | 3353 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3106 | 32 | 264 | 50% | 3105 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3306 | 26 | 368 | 50% | 3308 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3237 | 27 | 358 | 52% | 3210 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3013 | 24 | 496 | 52% | 2985 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |