# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3521<sub>(+43) | 3681<sub>(+70) | 3703<sub>(+26) |  |
| 0.8.0 | 2025-08-30 | 3478 | 3611 | 3677 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3511<sub>(+148) | 3644<sub>(+129) | 3683<sub>(+58) |  |
| 0.8.0 | 2025-08-30 | 3363 | 3515 | 3625 |  |
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

Generated: 2026-11-23 05:42:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3478, 3521]
  line "E1: LTC (60.0+0.60s)" [3611, 3681]
  line "E1: VLTC (2m24s+1.12s)" [3677, 3703]
  line "P1: STC (8.0+0.08s)" [3363, 3511]
  line "P1: LTC (60.0+0.60s)" [3515, 3644]
  line "P1: VLTC (2m24s+1.12s)" [3625, 3683]
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
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3683 | 41 | 146 | 58% | 3573 | 79% |
|  |  | E1 | 3703 | 21 | 530 | 53% | 3663 | 87% |
|  |  | T1 | 3607 | 30 | 244 | 53% | 3587 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3644 | 40 | 150 | 56% | 3567 | 82% |
|  |  | E1 | 3681 | 27 | 370 | 57% | 3499 | 76% |
|  |  | T1 | 3584 | 25 | 356 | 51% | 3579 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3521 | 26 | 362 | 48% | 3540 | 75% |
|  |  | T1 | 3498 | 19 | 668 | 51% | 3494 | 82% |
|  |  | P1 | 3511 | 34 | 192 | 49% | 3514 | 91% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3586 | 27 | 306 | 54% | 3560 | 88% |
|  |  | P1 | 3625 | 146 | 16 | 78% | 3308 | 44% |
|  |  | E1 | 3677 | 71 | 56 | 63% | 3441 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3572 | 29 | 268 | 51% | 3559 | 87% |
|  |  | P1 | 3515 | 76 | 48 | 67% | 3294 | 67% |
|  |  | E1 | 3611 | 68 | 68 | 71% | 3360 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3455 | 26 | 378 | 51% | 3440 | 74% |
|  |  | P1 | 3363 | 82 | 48 | 71% | 3069 | 54% |
|  |  | E1 | 3478 | 59 | 76 | 61% | 3336 | 68% |