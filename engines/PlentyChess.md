# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3474<sub>(+25) | 3583<sub>(+7) | 3599<sub>(+24) |  |
| 7.0.0 | 2025-09-25 | 3449<sub>(+new) | 3576<sub>(+new) | 3575<sub>(+7) |  |
| 6.0.2 | 2025-06-06 |  |  | 3568<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3376<sub>(+5) | 3544<sub>(+new) | 3568<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3371<sub>(+66) |  | 3544<sub>(+6) |  |
| 3.0.1 | 2024-11-22 | 3305<sub>(-30) | 3448<sub>(-32) | 3538<sub>(+21) |  |
| 2.1.0 | 2024-07-02 | 3335 | 3480 | 3517 |  |
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

Generated: 2026-10-09 04:41:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3335, 3305, 3376, 3449, 3474]
  line "STC (8.0+0.08s)" [3335, 3305, 3376, 3449, 3474]
  line "LTC (60.0+0.60s)" [3480, 3448, 3544, 3576, 3583]
  line "" [3517, 3538, 3568, 3575, 3599]
  line "VLTC (2m24s+1.12s)" [3517, 3538, 3568, 3575, 3599]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 38 | 158 | 52% | 3588 | 91% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3583 | 37 | 164 | 50% | 3584 | 93% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3474 | 31 | 244 | 48% | 3491 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 24 | 392 | 51% | 3569 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 42 | 130 | 50% | 3573 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3449 | 35 | 204 | 49% | 3449 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 34 | 192 | 51% | 3565 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 26 | 332 | 51% | 3559 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 68 | 48 | 48% | 3557 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3376 | 208 | 4 | 50% | 3376 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 20 | 600 | 50% | 3542 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3371 | 59 | 72 | 52% | 3355 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 21 | 544 | 50% | 3537 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 36 | 208 | 50% | 3441 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3305 | 33 | 248 | 47% | 3324 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 23 | 460 | 52% | 3502 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 63 | 64 | 63% | 3378 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3335 | 98 | 92 | 92% | 2533 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |