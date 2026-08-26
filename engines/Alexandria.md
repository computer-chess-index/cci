# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3429<sub>(+1) | 3546<sub>(+1) | 3578<sub>(-1) |  |
| 8.1.12 | 2025-11-09 | 3428<sub>(+8) | 3545<sub>(-1) | 3579<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3420<sub>(+30) | 3546<sub>(+25) | 3567<sub>(+11) |  |
| 8.0 | 2025-03-03 | 3390<sub>(+43) | 3521<sub>(+14) | 3556<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3347<sub>(+12) | 3507<sub>(+17) | 3538<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3335 | 3490 | 3533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexandria+<version>&body=###%20Engine%20name%0AAlexandria%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:22:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3335, 3347, 3390, 3420, 3428, 3429]
  line "STC (8.0+0.08s)" [3335, 3347, 3390, 3420, 3428, 3429]
  line "LTC (60.0+0.60s)" [3490, 3507, 3521, 3546, 3545, 3546]
  line "VLTC (2m24s+1.12s)" [3533, 3538, 3556, 3567, 3579, 3578]
  line "VLTC (2m24s+1.12s)" [3533, 3538, 3556, 3567, 3579, 3578]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 27 | 322 | 52% | 3563 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 23 | 420 | 51% | 3541 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3429 | 20 | 610 | 51% | 3425 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 34 | 202 | 51% | 3571 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 30 | 256 | 49% | 3552 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3428 | 26 | 360 | 50% | 3425 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 31 | 240 | 50% | 3565 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 27 | 304 | 50% | 3545 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3420 | 26 | 348 | 50% | 3418 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 26 | 348 | 51% | 3548 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 23 | 428 | 50% | 3524 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3390 | 24 | 440 | 50% | 3391 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 19 | 648 | 51% | 3532 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 16 | 868 | 50% | 3507 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 16 | 964 | 50% | 3349 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 30 | 268 | 56% | 3456 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 33 | 212 | 51% | 3483 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3335 | 32 | 244 | 52% | 3316 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |