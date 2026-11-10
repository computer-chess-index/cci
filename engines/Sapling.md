# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3129<sub>(+35) | 3380<sub>(-7) | 3476<sub>(+21) |  |
| 2.0.0 | 2026-10-21 | 3094 | 3387 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3233<sub>(+65) | 3453<sub>(-33) | 3546<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3168 | 3486 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3168 | 3486 | 3530 |  |
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

Generated: 2026-11-10 05:42:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3094, 3129]
  line "E1: LTC (60.0+0.60s)" [3387, 3380]
  line "E1: VLTC (2m24s+1.12s)" [3455, 3476]
  line "P1: STC (8.0+0.08s)" [3168, 3233]
  line "P1: LTC (60.0+0.60s)" [3486, 3453]
  line "P1: VLTC (2m24s+1.12s)" [3530, 3546]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3476 | 29 | 284 | 50% | 3476 | 74% |
|  |  | P1 | 3546 | 40 | 152 | 49% | 3551 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3453 | 35 | 220 | 51% | 3448 | 61% |
|  |  | E1 | 3380 | 29 | 314 | 48% | 3397 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3233 | 41 | 162 | 53% | 3212 | 58% |
|  |  | E1 | 3129 | 35 | 236 | 52% | 3117 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 38 | 254 | 67% | 2851 | 47% |
|  |  | E1 | 3455 | 32 | 320 | 62% | 3036 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3486 | 43 | 214 | 70% | 2722 | 44% |
|  |  | E1 | 3387 | 29 | 380 | 62% | 3039 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3168 | 43 | 220 | 68% | 2542 | 39% |
|  |  | E1 | 3094 | 35 | 272 | 57% | 2789 | 42% |