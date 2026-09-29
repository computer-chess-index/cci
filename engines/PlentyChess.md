# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3472<sub>(+25) | 3582<sub>(+7) | 3598<sub>(+25) |  |
| 7.0.0 | 2025-09-25 | 3447<sub>(+new) | 3575<sub>(+new) | 3573<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3567<sub>(+2) |  |
| 5.0.0 | 2025-03-23 | 3375<sub>(+5) | 3542<sub>(+new) | 3565<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3370<sub>(+67) |  | 3541<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3303<sub>(-30) | 3447<sub>(-32) | 3537<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3333 | 3479 | 3514 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-29 04:41:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3333, 3303, 3375, 3447, 3472]
  line "STC (8.0+0.08s)" [3333, 3303, 3375, 3447, 3472]
  line "LTC (60.0+0.60s)" [3479, 3447, 3542, 3575, 3582]
  line "" [3514, 3537, 3565, 3573, 3598]
  line "VLTC (2m24s+1.12s)" [3514, 3537, 3565, 3573, 3598]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3598 | 38 | 158 | 52% | 3587 | 91% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3582 | 37 | 160 | 50% | 3583 | 93% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3472 | 31 | 244 | 48% | 3490 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 24 | 392 | 51% | 3567 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3575 | 42 | 130 | 50% | 3572 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3447 | 35 | 204 | 49% | 3448 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 34 | 192 | 51% | 3564 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 26 | 332 | 51% | 3556 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 68 | 48 | 48% | 3555 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3375 | 208 | 4 | 50% | 3375 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 20 | 600 | 50% | 3541 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3370 | 59 | 72 | 52% | 3353 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 21 | 544 | 50% | 3536 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 36 | 208 | 50% | 3440 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3303 | 33 | 248 | 47% | 3321 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 23 | 460 | 52% | 3501 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 63 | 64 | 63% | 3376 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 98 | 92 | 92% | 2530 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |