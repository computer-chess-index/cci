# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3425<sub>(+1) | 3541<sub>(0) | 3573<sub>(-2) |  |
| 8.1.12 | 2025-11-09 | 3424<sub>(+7) | 3541<sub>(-1) | 3575<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3417<sub>(+31) | 3542<sub>(+25) | 3563<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3386<sub>(+43) | 3517<sub>(+14) | 3553<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3343<sub>(+13) | 3503<sub>(+17) | 3534<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3330 | 3486 | 3529 |  |
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

Generated: 2026-08-21 06:22:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3330, 3343, 3386, 3417, 3424, 3425]
  line "STC (8.0+0.08s)" [3330, 3343, 3386, 3417, 3424, 3425]
  line "LTC (60.0+0.60s)" [3486, 3503, 3517, 3542, 3541, 3541]
  line "VLTC (2m24s+1.12s)" [3529, 3534, 3553, 3563, 3575, 3573]
  line "VLTC (2m24s+1.12s)" [3529, 3534, 3553, 3563, 3575, 3573]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 27 | 314 | 52% | 3560 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 23 | 408 | 51% | 3537 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3425 | 20 | 598 | 51% | 3420 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 34 | 202 | 51% | 3567 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 30 | 256 | 49% | 3548 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3424 | 26 | 360 | 50% | 3422 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 31 | 240 | 50% | 3561 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 27 | 304 | 50% | 3542 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3417 | 26 | 348 | 50% | 3414 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 26 | 348 | 51% | 3544 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 23 | 428 | 50% | 3519 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3386 | 24 | 440 | 50% | 3387 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 19 | 648 | 51% | 3528 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 16 | 868 | 50% | 3503 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 16 | 964 | 50% | 3345 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 30 | 268 | 56% | 3452 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 33 | 212 | 51% | 3479 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3330 | 32 | 244 | 52% | 3312 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |