# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3124<sub>(+37) | 3374<sub>(-6) | 3470<sub>(+22) |  |
| 2.0.0 | 2026-10-21 | 3087 | 3380 | 3448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3237<sub>(+67) | 3455<sub>(-31) | 3549<sub>(+19) |  |
| 2.0.0 | 2026-10-21 | 3170 | 3486 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3170 | 3486 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:42:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3087, 3124]
  line "E1: LTC (60.0+0.60s)" [3380, 3374]
  line "E1: VLTC (2m24s+1.12s)" [3448, 3470]
  line "P1: STC (8.0+0.08s)" [3170, 3237]
  line "P1: LTC (60.0+0.60s)" [3486, 3455]
  line "P1: VLTC (2m24s+1.12s)" [3530, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3549 | 41 | 148 | 50% | 3552 | 74% |
|  |  | E1 | 3470 | 30 | 280 | 50% | 3470 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3455 | 35 | 220 | 51% | 3448 | 61% |
|  |  | E1 | 3374 | 29 | 310 | 48% | 3390 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3237 | 42 | 154 | 54% | 3209 | 58% |
|  |  | E1 | 3124 | 35 | 232 | 52% | 3109 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 38 | 254 | 67% | 2851 | 47% |
|  |  | E1 | 3448 | 32 | 320 | 62% | 3029 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3486 | 43 | 214 | 70% | 2722 | 44% |
|  |  | E1 | 3380 | 29 | 380 | 62% | 3032 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3170 | 43 | 220 | 68% | 2542 | 39% |
|  |  | E1 | 3087 | 35 | 272 | 57% | 2784 | 42% |