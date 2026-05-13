# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3348<sub>(+99) | 3530<sub>(+60) | 3579<sub>(+54) |  |
| 6.1 | 2026-02-01 | 3249<sub>(+32) | 3470<sub>(+63) | 3525<sub>(+55) |  |
| 6.0 | 2026-01-01 | 3217<sub>(+120) | 3407<sub>(+121) | 3470<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3097<sub>(+new) | 3286<sub>(+new) | 3317<sub>(+new) |  |
| 4.0 | 2025-10-03 |  |  |  |  |
| 3.0 | 2025-07-02 |  |  |  |  |
| 2.0 | 2025-06-17 |  |  |  |  |
| 1.0 | 2025-04-20 |  |  |  |  |
| 20250318T22 | 2025-03-19 |  |  |  |  |
| 20250311T07 | 2025-03-11 |  |  |  |  |
| 20250307T21 | 2025-03-08 |  |  |  |  |
| 20250306T21 | 2025-03-07 |  |  |  |  |
| 20250302T22 | 2025-03-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-13 06:28:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3097, 3217, 3249, 3348]
  line "STC (8.0+0.08s)" [3097, 3217, 3249, 3348]
  line "LTC (60.0+0.60s)" [3286, 3407, 3470, 3530]
  line "VLTC (2m24s+1.12s)" [3317, 3470, 3525, 3579]
  line "VLTC (2m24s+1.12s)" [3317, 3470, 3525, 3579]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 32 | 218 | 50% | 3575 | 88% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 29 | 272 | 51% | 3521 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 33 | 236 | 50% | 3349 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 21 | 520 | 50% | 3524 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 23 | 464 | 50% | 3468 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3249 | 25 | 456 | 51% | 3241 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 28 | 312 | 50% | 3464 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3407 | 31 | 268 | 50% | 3407 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3217 | 32 | 264 | 49% | 3225 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3317 | 32 | 254 | 50% | 3306 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3286 | 38 | 184 | 53% | 3241 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3097 | 35 | 236 | 55% | 3013 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |