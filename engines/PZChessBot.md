# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3316<sub>(+25) | 3515<sub>(+36) | 3524<sub>(-2) |  |
| 7.0 | 2026-05-07 | 3291<sub>(+96) | 3479<sub>(+61) | 3526<sub>(+52) |  |
| 6.1 | 2026-02-01 | 3195<sub>(+32) | 3418<sub>(+62) | 3474<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3163<sub>(+121) | 3356<sub>(+123) | 3417<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3042 | 3233 | 3264 |  |
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

Generated: 2026-08-21 06:29:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3042, 3163, 3195, 3291, 3316]
  line "STC (8.0+0.08s)" [3042, 3163, 3195, 3291, 3316]
  line "LTC (60.0+0.60s)" [3233, 3356, 3418, 3479, 3515]
  line "VLTC (2m24s+1.12s)" [3264, 3417, 3474, 3526, 3524]
  line "VLTC (2m24s+1.12s)" [3264, 3417, 3474, 3526, 3524]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 33 | 214 | 50% | 3522 | 86% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 32 | 232 | 50% | 3515 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3316 | 29 | 294 | 50% | 3316 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 25 | 362 | 50% | 3526 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 25 | 388 | 51% | 3472 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3291 | 28 | 340 | 50% | 3293 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 21 | 520 | 50% | 3472 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 23 | 464 | 50% | 3417 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3195 | 25 | 456 | 51% | 3189 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 28 | 312 | 50% | 3413 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 31 | 268 | 50% | 3356 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3163 | 32 | 264 | 49% | 3171 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 32 | 254 | 50% | 3254 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 38 | 184 | 53% | 3189 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3042 | 35 | 236 | 55% | 2958 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |