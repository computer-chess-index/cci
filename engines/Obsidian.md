# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3434<sub>(-52) | 3653<sub>(+113) | 3684<sub>(+84) |  |
| 15.0 | 2025-01-31 | 3486 | 3540 | 3600 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3416<sub>(+73) | 3584<sub>(+249) | 3633<sub>(+193) |  |
| 15.0 | 2025-01-31 | 3343 | 3335 | 3440 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3449<sub>(+28) | 3571<sub>(+26) | 3596<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3421<sub>(-7) | 3545<sub>(-7) | 3569<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3428<sub>(+23) | 3552<sub>(+27) | 3571<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3405 | 3525 | 3564 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Obsidian+<version>&body=###%20Engine%20name%0AObsidian%0A%0A###%20Version%0A16.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:40:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3486, 3434]
  line "E1: LTC (60.0+0.60s)" [3540, 3653]
  line "E1: VLTC (2m24s+1.12s)" [3600, 3684]
  line "P1: STC (8.0+0.08s)" [3343, 3416]
  line "P1: LTC (60.0+0.60s)" [3335, 3584]
  line "P1: VLTC (2m24s+1.12s)" [3440, 3633]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "T1: STC (8.0+0.08s)" [3405, 3428, 3421, 3449]
  line "T1: LTC (60.0+0.60s)" [3525, 3552, 3545, 3571]
  line "T1: VLTC (2m24s+1.12s)" [3564, 3571, 3569, 3596]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3596 | 20 | 564 | 53% | 3579 | 92% |
|  |  | P1 | 3633 | 43 | 124 | 50% | 3630 | 85% |
|  |  | E1 | 3684 | 27 | 298 | 50% | 3686 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3584 | 40 | 144 | 51% | 3580 | 86% |
|  |  | T1 | 3571 | 17 | 800 | 51% | 3564 | 89% |
|  |  | E1 | 3653 | 33 | 214 | 50% | 3649 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3416 | 34 | 212 | 49% | 3417 | 77% |
|  |  | T1 | 3449 | 14 | 1196 | 49% | 3451 | 76% |
|  |  | E1 | 3434 | 25 | 388 | 48% | 3451 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3569 | 31 | 236 | 51% | 3564 | 89% |
|  |  | P1 | 3440 | 111 | 28 | 77% | 2924 | 46% |
|  |  | E1 | 3600 | 98 | 28 | 68% | 3456 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3335 | 182 | 16 | 91% | 2881 | 19% |
|  |  | E1 | 3540 | 92 | 36 | 72% | 3329 | 56% |
|  |  | T1 | 3545 | 29 | 280 | 50% | 3544 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3343 | 188 | 12 | 88% | 2957 | 25% |
|  |  | E1 | 3486 | 78 | 44 | 60% | 3380 | 66% |
|  |  | T1 | 3421 | 27 | 320 | 51% | 3411 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 22 | 492 | 52% | 3560 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3552 | 19 | 644 | 51% | 3544 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3428 | 16 | 944 | 50% | 3425 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3564 | 38 | 160 | 52% | 3545 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3525 | 34 | 200 | 49% | 3533 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3405 | 28 | 332 | 52% | 3393 | 68% |