# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3428<sub>(+3) | 3544<sub>(+2) | 3575<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3425<sub>(+7) | 3542<sub>(-2) | 3578<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3418<sub>(+29) | 3544<sub>(+26) | 3564<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3389<sub>(+44) | 3518<sub>(+13) | 3555<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3345<sub>(+12) | 3505<sub>(+18) | 3536<sub>(+4) |  |
| 7.0 | 2024-05-25 | 3333 | 3487 | 3532 |  |
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

Generated: 2026-08-23 06:22:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3333, 3345, 3389, 3418, 3425, 3428]
  line "STC (8.0+0.08s)" [3333, 3345, 3389, 3418, 3425, 3428]
  line "LTC (60.0+0.60s)" [3487, 3505, 3518, 3544, 3542, 3544]
  line "VLTC (2m24s+1.12s)" [3532, 3536, 3555, 3564, 3578, 3575]
  line "VLTC (2m24s+1.12s)" [3532, 3536, 3555, 3564, 3578, 3575]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 27 | 318 | 52% | 3561 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 23 | 412 | 51% | 3540 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3428 | 20 | 602 | 51% | 3422 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 34 | 202 | 51% | 3569 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 30 | 256 | 49% | 3549 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3425 | 26 | 360 | 50% | 3424 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 31 | 240 | 50% | 3563 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 27 | 304 | 50% | 3544 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3418 | 26 | 348 | 50% | 3417 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 26 | 348 | 51% | 3545 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 23 | 428 | 50% | 3522 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3389 | 24 | 440 | 50% | 3390 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 19 | 648 | 51% | 3529 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 16 | 868 | 50% | 3506 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3345 | 16 | 964 | 50% | 3348 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 30 | 268 | 56% | 3453 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 33 | 212 | 51% | 3480 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 32 | 244 | 52% | 3314 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |