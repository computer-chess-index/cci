# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3402<sub>(+50) | 3548<sub>(+30) | 3580<sub>(+24) |  |
| 7.0.0 | 2025-06-24 | 3352<sub>(+53) | 3518<sub>(+40) | 3556<sub>(+49) |  |
| 6.0.0 | 2024-10-29 | 3299<sub>(+97) | 3478<sub>(+77) | 3507<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3202 | 3401 | 3438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-03 04:39:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3202, 3299, 3352, 3402]
  line "STC (8.0+0.08s)" [3202, 3299, 3352, 3402]
  line "LTC (60.0+0.60s)" [3401, 3478, 3518, 3548]
  line "" [3438, 3507, 3556, 3580]
  line "VLTC (2m24s+1.12s)" [3438, 3507, 3556, 3580]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 28 | 286 | 51% | 3571 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 26 | 330 | 50% | 3546 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3402 | 26 | 372 | 50% | 3401 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 18 | 722 | 51% | 3552 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 17 | 824 | 51% | 3514 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 17 | 930 | 51% | 3344 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 14 | 1184 | 50% | 3506 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 14 | 1228 | 50% | 3480 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3299 | 15 | 1188 | 50% | 3298 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 32 | 248 | 51% | 3432 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3401 | 27 | 340 | 54% | 3368 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3202 | 29 | 332 | 48% | 3218 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |