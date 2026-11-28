# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3055<sub>(+16) | 3306<sub>(-8) | 3402<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 3039 | 3314 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3086<sub>(+61) | 3291<sub>(-23) | 3371<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3025 | 3314 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3025 | 3314 | 3355 |  |
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

Generated: 2026-11-28 05:42:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3039, 3055]
  line "E1: LTC (60.0+0.60s)" [3314, 3306]
  line "E1: VLTC (2m24s+1.12s)" [3387, 3402]
  line "P1: STC (8.0+0.08s)" [3025, 3086]
  line "P1: LTC (60.0+0.60s)" [3314, 3291]
  line "P1: VLTC (2m24s+1.12s)" [3355, 3371]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3371 | 39 | 160 | 49% | 3379 | 74% |
|  |  | E1 | 3402 | 28 | 320 | 50% | 3403 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3306 | 26 | 378 | 48% | 3321 | 66% |
|  |  | P1 | 3291 | 30 | 288 | 52% | 3278 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3055 | 30 | 320 | 50% | 3054 | 48% |
|  |  | P1 | 3086 | 35 | 218 | 52% | 3073 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3355 | 38 | 254 | 67% | 2720 | 47% |
|  |  | E1 | 3387 | 30 | 352 | 62% | 3008 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3314 | 39 | 238 | 68% | 2672 | 47% |
|  |  | E1 | 3314 | 26 | 440 | 60% | 3021 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3025 | 40 | 240 | 66% | 2489 | 40% |
|  |  | E1 | 3039 | 31 | 336 | 56% | 2788 | 44% |