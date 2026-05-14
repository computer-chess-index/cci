# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3349<sub>(+100) | 3532<sub>(+61) | 3579<sub>(+54) |  |
| 6.1 | 2026-02-01 | 3249<sub>(+31) | 3471<sub>(+62) | 3525<sub>(+55) |  |
| 6.0 | 2026-01-01 | 3218<sub>(+121) | 3409<sub>(+122) | 3470<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3097<sub>(+new) | 3287<sub>(+new) | 3317<sub>(+new) |  |
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

Generated: 2026-05-14 06:27:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3097, 3218, 3249, 3349]
  line "STC (8.0+0.08s)" [3097, 3218, 3249, 3349]
  line "LTC (60.0+0.60s)" [3287, 3409, 3471, 3532]
  line "VLTC (2m24s+1.12s)" [3317, 3470, 3525, 3579]
  line "VLTC (2m24s+1.12s)" [3317, 3470, 3525, 3579]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 32 | 218 | 50% | 3576 | 88% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 29 | 272 | 51% | 3522 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3349 | 33 | 236 | 50% | 3351 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 21 | 520 | 50% | 3524 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 23 | 464 | 50% | 3470 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3249 | 25 | 456 | 51% | 3243 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 28 | 312 | 50% | 3465 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 31 | 268 | 50% | 3409 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3218 | 32 | 264 | 49% | 3225 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3317 | 32 | 254 | 50% | 3308 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3287 | 38 | 184 | 53% | 3241 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3097 | 35 | 236 | 55% | 3013 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |