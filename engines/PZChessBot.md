# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3314<sub>(+24) | 3514<sub>(+36) | 3522<sub>(-3) |  |
| 7.0 | 2026-05-07 | 3290<sub>(+96) | 3478<sub>(+61) | 3525<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3194<sub>(+32) | 3417<sub>(+62) | 3472<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3162<sub>(+122) | 3355<sub>(+123) | 3416<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3040 | 3232 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:28:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3040, 3162, 3194, 3290, 3314]
  line "STC (8.0+0.08s)" [3040, 3162, 3194, 3290, 3314]
  line "LTC (60.0+0.60s)" [3232, 3355, 3417, 3478, 3514]
  line "VLTC (2m24s+1.12s)" [3263, 3416, 3472, 3525, 3522]
  line "VLTC (2m24s+1.12s)" [3263, 3416, 3472, 3525, 3522]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 33 | 214 | 50% | 3521 | 86% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 32 | 232 | 50% | 3514 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3314 | 29 | 290 | 50% | 3314 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 25 | 362 | 50% | 3525 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 25 | 388 | 51% | 3471 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3290 | 28 | 340 | 50% | 3291 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 21 | 520 | 50% | 3471 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3417 | 23 | 464 | 50% | 3416 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3194 | 25 | 456 | 51% | 3187 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 28 | 312 | 50% | 3411 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 31 | 268 | 50% | 3355 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3162 | 32 | 264 | 49% | 3170 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 32 | 254 | 50% | 3252 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 38 | 184 | 53% | 3187 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3040 | 35 | 236 | 55% | 2958 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |