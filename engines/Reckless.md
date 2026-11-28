# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3515<sub>(+82) | 3672<sub>(+49) | 3694<sub>(+22) |  |
| 0.8.0 | 2025-08-30 | 3433 | 3623 | 3672 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3519<sub>(+133) | 3654<sub>(+122) | 3692<sub>(+50) |  |
| 0.8.0 | 2025-08-30 | 3386 | 3532 | 3642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-28 05:42:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3433, 3515]
  line "E1: LTC (60.0+0.60s)" [3623, 3672]
  line "E1: VLTC (2m24s+1.12s)" [3672, 3694]
  line "P1: STC (8.0+0.08s)" [3386, 3519]
  line "P1: LTC (60.0+0.60s)" [3532, 3654]
  line "P1: VLTC (2m24s+1.12s)" [3642, 3692]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "T1: STC (8.0+0.08s)" [3455, 3498]
  line "T1: LTC (60.0+0.60s)" [3572, 3584]
  line "T1: VLTC (2m24s+1.12s)" [3586, 3607]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3694 | 21 | 554 | 53% | 3656 | 87% |
|  |  | T1 | 3607 | 30 | 244 | 53% | 3587 | 93% |
|  |  | P1 | 3692 | 39 | 162 | 57% | 3595 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3672 | 26 | 386 | 57% | 3499 | 77% |
|  |  | T1 | 3584 | 25 | 356 | 51% | 3579 | 93% |
|  |  | P1 | 3654 | 40 | 150 | 56% | 3578 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3498 | 19 | 668 | 51% | 3494 | 82% |
|  |  | P1 | 3519 | 34 | 200 | 49% | 3525 | 90% |
|  |  | E1 | 3515 | 25 | 402 | 48% | 3532 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3586 | 27 | 306 | 54% | 3560 | 88% |
|  |  | P1 | 3642 | 109 | 24 | 69% | 3424 | 63% |
|  |  | E1 | 3672 | 53 | 92 | 58% | 3528 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3572 | 29 | 268 | 51% | 3559 | 87% |
|  |  | P1 | 3532 | 76 | 48 | 67% | 3309 | 67% |
|  |  | E1 | 3623 | 56 | 92 | 67% | 3424 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3455 | 26 | 378 | 51% | 3440 | 74% |
|  |  | P1 | 3386 | 78 | 52 | 70% | 3104 | 56% |
|  |  | E1 | 3433 | 39 | 164 | 52% | 3389 | 74% |