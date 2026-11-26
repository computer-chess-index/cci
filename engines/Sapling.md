# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3060<sub>(+18) | 3309<sub>(-7) | 3403<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3042 | 3316 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3082<sub>(+61) | 3290<sub>(-23) | 3370<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 3021 | 3313 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3021 | 3313 | 3355 |  |
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

Generated: 2026-11-26 05:43:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3042, 3060]
  line "E1: LTC (60.0+0.60s)" [3316, 3309]
  line "E1: VLTC (2m24s+1.12s)" [3387, 3403]
  line "P1: STC (8.0+0.08s)" [3021, 3082]
  line "P1: LTC (60.0+0.60s)" [3313, 3290]
  line "P1: VLTC (2m24s+1.12s)" [3355, 3370]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3370 | 39 | 160 | 49% | 3379 | 74% |
|  |  | E1 | 3403 | 28 | 312 | 50% | 3405 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3290 | 30 | 284 | 52% | 3275 | 62% |
|  |  | E1 | 3309 | 27 | 366 | 48% | 3324 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3082 | 36 | 206 | 52% | 3067 | 61% |
|  |  | E1 | 3060 | 31 | 300 | 51% | 3054 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3387 | 31 | 340 | 62% | 2996 | 53% |
|  |  | P1 | 3355 | 38 | 254 | 67% | 2719 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3316 | 27 | 428 | 61% | 3013 | 54% |
|  |  | P1 | 3313 | 39 | 238 | 68% | 2672 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3042 | 31 | 332 | 57% | 2785 | 43% |
|  |  | P1 | 3021 | 40 | 240 | 66% | 2487 | 40% |