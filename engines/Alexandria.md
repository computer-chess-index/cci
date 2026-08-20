# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3425<sub>(+3) | 3541<sub>(+1) | 3573<sub>(-2) |  |
| 8.1.12 | 2025-11-09 | 3422<sub>(+6) | 3540<sub>(-1) | 3575<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3416<sub>(+30) | 3541<sub>(+26) | 3561<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3386<sub>(+43) | 3515<sub>(+13) | 3552<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3343<sub>(+13) | 3502<sub>(+18) | 3534<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3330 | 3484 | 3529 |  |
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

Generated: 2026-08-20 06:22:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3330, 3343, 3386, 3416, 3422, 3425]
  line "STC (8.0+0.08s)" [3330, 3343, 3386, 3416, 3422, 3425]
  line "LTC (60.0+0.60s)" [3484, 3502, 3515, 3541, 3540, 3541]
  line "VLTC (2m24s+1.12s)" [3529, 3534, 3552, 3561, 3575, 3573]
  line "VLTC (2m24s+1.12s)" [3529, 3534, 3552, 3561, 3575, 3573]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 27 | 314 | 52% | 3559 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 23 | 408 | 51% | 3537 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3425 | 20 | 594 | 51% | 3420 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 34 | 202 | 51% | 3567 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 30 | 256 | 49% | 3546 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3422 | 26 | 360 | 50% | 3421 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 31 | 240 | 50% | 3560 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 27 | 304 | 50% | 3541 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3416 | 26 | 348 | 50% | 3414 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 26 | 348 | 51% | 3542 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 23 | 428 | 50% | 3519 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3386 | 24 | 440 | 50% | 3387 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 19 | 648 | 51% | 3526 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 16 | 868 | 50% | 3503 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 16 | 964 | 50% | 3345 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 30 | 268 | 56% | 3451 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 33 | 212 | 51% | 3478 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3330 | 32 | 244 | 52% | 3312 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |