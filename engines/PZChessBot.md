# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3316<sub>(+23) | 3517<sub>(+37) | 3525<sub>(-3) |  |
| 7.0 | 2026-05-07 | 3293<sub>(+96) | 3480<sub>(+60) | 3528<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3197<sub>(+33) | 3420<sub>(+63) | 3475<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3164<sub>(+121) | 3357<sub>(+122) | 3418<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3043 | 3235 | 3266 |  |
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

Generated: 2026-08-22 06:28:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3043, 3164, 3197, 3293, 3316]
  line "STC (8.0+0.08s)" [3043, 3164, 3197, 3293, 3316]
  line "LTC (60.0+0.60s)" [3235, 3357, 3420, 3480, 3517]
  line "VLTC (2m24s+1.12s)" [3266, 3418, 3475, 3528, 3525]
  line "VLTC (2m24s+1.12s)" [3266, 3418, 3475, 3528, 3525]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 33 | 214 | 50% | 3524 | 86% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 32 | 232 | 50% | 3517 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3316 | 29 | 298 | 50% | 3317 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 25 | 362 | 50% | 3528 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 25 | 388 | 51% | 3475 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3293 | 28 | 340 | 50% | 3294 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 21 | 520 | 50% | 3474 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 23 | 464 | 50% | 3418 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 25 | 456 | 51% | 3190 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 28 | 312 | 50% | 3414 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 31 | 268 | 50% | 3357 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3164 | 32 | 264 | 49% | 3173 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 32 | 254 | 50% | 3255 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3235 | 38 | 184 | 53% | 3190 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3043 | 35 | 236 | 55% | 2959 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |