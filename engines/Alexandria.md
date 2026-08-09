# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3418<sub>(0) | 3536<sub>(+2) | 3568<sub>(-1) |  |
| 8.1.12 | 2025-11-09 | 3418<sub>(+8) | 3534<sub>(-2) | 3569<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3410<sub>(+30) | 3536<sub>(+25) | 3556<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3380<sub>(+43) | 3511<sub>(+14) | 3546<sub>(+17) |  |
| 7.1 | 2024-10-26 | 3337<sub>(+12) | 3497<sub>(+17) | 3529<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3325 | 3480 | 3524 |  |
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

Generated: 2026-08-09 06:22:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3325, 3337, 3380, 3410, 3418, 3418]
  line "STC (8.0+0.08s)" [3325, 3337, 3380, 3410, 3418, 3418]
  line "LTC (60.0+0.60s)" [3480, 3497, 3511, 3536, 3534, 3536]
  line "VLTC (2m24s+1.12s)" [3524, 3529, 3546, 3556, 3569, 3568]
  line "VLTC (2m24s+1.12s)" [3524, 3529, 3546, 3556, 3569, 3568]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 27 | 306 | 52% | 3553 | 87% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 24 | 404 | 51% | 3532 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3418 | 21 | 574 | 51% | 3414 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 34 | 202 | 51% | 3561 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 30 | 256 | 49% | 3541 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3418 | 26 | 360 | 50% | 3416 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 31 | 240 | 50% | 3556 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 27 | 304 | 50% | 3536 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3410 | 26 | 348 | 50% | 3409 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 26 | 348 | 51% | 3537 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 23 | 428 | 50% | 3514 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 24 | 440 | 50% | 3382 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 19 | 648 | 51% | 3522 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 16 | 868 | 50% | 3498 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3337 | 16 | 964 | 50% | 3340 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 30 | 268 | 56% | 3447 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 33 | 212 | 51% | 3472 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 32 | 244 | 52% | 3306 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |