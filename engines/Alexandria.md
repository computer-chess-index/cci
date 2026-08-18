# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3424<sub>(+3) | 3540<sub>(+2) | 3572<sub>(-1) |  |
| 8.1.12 | 2025-11-09 | 3421<sub>(+7) | 3538<sub>(-2) | 3573<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3414<sub>(+30) | 3540<sub>(+26) | 3560<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3384<sub>(+43) | 3514<sub>(+13) | 3551<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3341<sub>(+12) | 3501<sub>(+17) | 3533<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3329 | 3484 | 3528 |  |
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

Generated: 2026-08-18 06:22:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3329, 3341, 3384, 3414, 3421, 3424]
  line "STC (8.0+0.08s)" [3329, 3341, 3384, 3414, 3421, 3424]
  line "LTC (60.0+0.60s)" [3484, 3501, 3514, 3540, 3538, 3540]
  line "VLTC (2m24s+1.12s)" [3528, 3533, 3551, 3560, 3573, 3572]
  line "VLTC (2m24s+1.12s)" [3528, 3533, 3551, 3560, 3573, 3572]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 27 | 306 | 52% | 3557 | 87% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 23 | 408 | 51% | 3536 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3424 | 20 | 594 | 51% | 3418 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 34 | 202 | 51% | 3565 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 30 | 256 | 49% | 3545 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3421 | 26 | 360 | 50% | 3420 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 31 | 240 | 50% | 3559 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 27 | 304 | 50% | 3540 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3414 | 26 | 348 | 50% | 3413 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 26 | 348 | 51% | 3541 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 23 | 428 | 50% | 3518 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3384 | 24 | 440 | 50% | 3386 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 19 | 648 | 51% | 3525 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 16 | 868 | 50% | 3502 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3341 | 16 | 964 | 50% | 3344 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 30 | 268 | 56% | 3449 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 33 | 212 | 51% | 3476 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 32 | 244 | 52% | 3310 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |