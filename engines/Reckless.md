# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3518<sub>(+43) | 3683<sub>(+74) | 3698<sub>(+22) |  |
| 0.8.0 | 2025-08-30 | 3475 | 3609 | 3676 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3499<sub>(+181) | 3637<sub>(+184) | 3675<sub>(+64) |  |
| 0.8.0 | 2025-08-30 | 3318 | 3453 | 3611 |  |
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

Generated: 2026-11-19 05:42:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3475, 3518]
  line "E1: LTC (60.0+0.60s)" [3609, 3683]
  line "E1: VLTC (2m24s+1.12s)" [3676, 3698]
  line "P1: STC (8.0+0.08s)" [3318, 3499]
  line "P1: LTC (60.0+0.60s)" [3453, 3637]
  line "P1: VLTC (2m24s+1.12s)" [3611, 3675]
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
|  |  | P1 | 3675 | 43 | 138 | 59% | 3559 | 78% |
|  |  | E1 | 3698 | 25 | 380 | 54% | 3646 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3584 | 25 | 356 | 51% | 3579 | 93% |
|  |  | P1 | 3637 | 42 | 138 | 56% | 3552 | 80% |
|  |  | E1 | 3683 | 28 | 350 | 58% | 3487 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3498 | 19 | 668 | 51% | 3494 | 82% |
|  |  | P1 | 3499 | 35 | 184 | 49% | 3502 | 90% |
|  |  | E1 | 3518 | 26 | 358 | 48% | 3534 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3586 | 27 | 306 | 54% | 3560 | 88% |
|  |  | P1 | 3611 | 146 | 16 | 78% | 3291 | 44% |
|  |  | E1 | 3676 | 71 | 56 | 63% | 3440 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3572 | 29 | 268 | 51% | 3559 | 87% |
|  |  | P1 | 3453 | 96 | 32 | 70% | 3170 | 59% |
|  |  | E1 | 3609 | 68 | 68 | 71% | 3357 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3455 | 26 | 378 | 51% | 3440 | 74% |
|  |  | P1 | 3318 | 93 | 40 | 73% | 2997 | 50% |
|  |  | E1 | 3475 | 59 | 76 | 61% | 3335 | 68% |