# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3201<sub>(+38) | 3460<sub>(+116) | 3579<sub>(+91) |  |
| 7.3 | 2024-01-28 | 3163 | 3344 | 3488 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3179<sub>(+29) | 3440<sub>(+47) | 3487<sub>(+185) |  |
| 7.3 | 2024-01-28 | 3150 | 3393 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3241 | 3456 | 3499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Booot+<version>&body=###%20Engine%20name%0ABooot%0A%0A###%20Version%0A7.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:36:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3163, 3201]
  line "E1: LTC (60.0+0.60s)" [3344, 3460]
  line "E1: VLTC (2m24s+1.12s)" [3488, 3579]
  line "P1: STC (8.0+0.08s)" [3150, 3179]
  line "P1: LTC (60.0+0.60s)" [3393, 3440]
  line "P1: VLTC (2m24s+1.12s)" [3302, 3487]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3579 | 31 | 262 | 53% | 3530 | 74% |
|  |  | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3487 | 38 | 174 | 54% | 3416 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3460 | 27 | 346 | 55% | 3386 | 73% |
|  |  | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  |  | P1 | 3440 | 39 | 160 | 52% | 3389 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
|  |  | P1 | 3179 | 32 | 264 | 48% | 3195 | 61% |
|  |  | E1 | 3201 | 26 | 376 | 47% | 3218 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3302 | 111 | 24 | 73% | 3087 | 54% |
|  |  | E1 | 3488 | 85 | 44 | 68% | 3248 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3393 | 145 | 16 | 75% | 3113 | 50% |
|  |  | E1 | 3344 | 81 | 42 | 52% | 3305 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3150 | 104 | 32 | 56% | 3055 | 31% |
|  |  | E1 | 3163 | 72 | 58 | 49% | 3168 | 47% |