# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2772 | 3092 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 3112 | 3383 | 3472 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2915<sub>(+8) | 3237<sub>(+25) | 3293<sub>(+21) |  |
| 2.7 | 2025-10-18 | 2907 | 3212 | 3272 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arcanum+<version>&body=###%20Engine%20name%0AArcanum%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:35:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2907, 2915]
  line "STC (8.0+0.08s)" [2907, 2915]
  line "LTC (60.0+0.60s)" [3212, 3237]
  line "" [3272, 3293]
  line "VLTC (2m24s+1.12s)" [3272, 3293]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3200 | 43 | 166 | 57% | 3081 | 51% |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 24 | 448 | 50% | 3295 | 66% |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 43 | 146 | 56% | 3406 | 64% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3092 | 43 | 158 | 56% | 3008 | 57% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3237 | 26 | 416 | 50% | 3233 | 57% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 50 | 110 | 55% | 3325 | 56% |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2915 | 24 | 504 | 49% | 2928 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 3112 | 44 | 146 | 55% | 3062 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2772 | 36 | 218 | 44% | 2817 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 27 | 394 | 54% | 3237 | 56% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 3212 | 26 | 424 | 50% | 3193 | 57% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2907 | 23 | 554 | 49% | 2905 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |