# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3519<sub>(+64) | 3680<sub>(+163) | 3694<sub>(+18) |  |
| 0.8.0 | 2025-08-30 | 3455 | 3517 | 3676 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3497<sub>(+269) | 3630<sub>(+255) | 3668<sub>(+149) |  |
| 0.8.0 | 2025-08-30 | 3228 | 3375 | 3519 |  |
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

Generated: 2026-11-15 05:41:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3455, 3519]
  line "E1: LTC (60.0+0.60s)" [3517, 3680]
  line "E1: VLTC (2m24s+1.12s)" [3676, 3694]
  line "P1: STC (8.0+0.08s)" [3228, 3497]
  line "P1: LTC (60.0+0.60s)" [3375, 3630]
  line "P1: VLTC (2m24s+1.12s)" [3519, 3668]
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
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3607 | 30 | 244 | 53% | 3587 | 93% |
|  |  | P1 | 3668 | 45 | 126 | 60% | 3537 | 77% |
|  |  | E1 | 3694 | 28 | 304 | 55% | 3630 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3630 | 42 | 138 | 56% | 3545 | 80% |
|  |  | E1 | 3680 | 28 | 346 | 58% | 3483 | 75% |
|  |  | T1 | 3584 | 25 | 356 | 51% | 3579 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3497 | 35 | 184 | 49% | 3499 | 90% |
|  |  | E1 | 3519 | 27 | 342 | 48% | 3534 | 75% |
|  |  | T1 | 3498 | 19 | 668 | 51% | 3494 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3676 | 114 | 28 | 79% | 3194 | 43% |
|  |  | T1 | 3586 | 27 | 306 | 54% | 3560 | 88% |
|  |  | P1 | 3519 | 252 | 8 | 94% | 3031 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3517 | 92 | 40 | 74% | 3206 | 53% |
|  |  | T1 | 3572 | 29 | 268 | 51% | 3559 | 87% |
|  |  | P1 | 3375 | 111 | 24 | 71% | 3060 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3455 | 81 | 44 | 66% | 3233 | 59% |
|  |  | T1 | 3455 | 26 | 378 | 51% | 3440 | 74% |
|  |  | P1 | 3228 | 133 | 24 | 79% | 2797 | 33% |