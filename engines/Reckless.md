# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3448 | 3615 | 3630 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3714 | 3849 | 3916 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3498<sub>(+43) | 3584<sub>(+12) | 3607<sub>(+21) |  |
| 0.8.0 | 2025-08-30 | 3455 | 3572 | 3586 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Reckless+<version>&body=###%20Engine%20name%0AReckless%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 14:15:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "" [3455, 3498]
  line "STC (8.0+0.08s)" [3455, 3498]
  line "LTC (60.0+0.60s)" [3572, 3584]
  line "" [3586, 3607]
  line "VLTC (2m24s+1.12s)" [3586, 3607]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3630 | 49 | 114 | 63% | 3465 | 72% |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3607 | 30 | 244 | 53% | 3587 | 93% |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3916 | 81 | 50 | 73% | 3592 | 54% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3615 | 40 | 192 | 66% | 3248 | 61% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3584 | 25 | 356 | 51% | 3579 | 93% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3849 | 69 | 58 | 66% | 3637 | 67% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3498 | 19 | 668 | 51% | 3494 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3714 | 41 | 132 | 51% | 3708 | 92% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3448 | 33 | 226 | 48% | 3461 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 27 | 306 | 54% | 3560 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3572 | 29 | 268 | 51% | 3559 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3455 | 26 | 378 | 51% | 3440 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |