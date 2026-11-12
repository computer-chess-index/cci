# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3117<sub>(+40) | 3368<sub>(-2) | 3457<sub>(+20) |  |
| 2.0.0 | 2026-10-21 | 3077 | 3370 | 3437 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3243<sub>(+64) | 3465<sub>(-33) | 3559<sub>(+17) |  |
| 2.0.0 | 2026-10-21 | 3179 | 3498 | 3542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3179 | 3498 | 3542 |  |
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

Generated: 2026-11-12 05:42:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3077, 3117]
  line "E1: LTC (60.0+0.60s)" [3370, 3368]
  line "E1: VLTC (2m24s+1.12s)" [3437, 3457]
  line "P1: STC (8.0+0.08s)" [3179, 3243]
  line "P1: LTC (60.0+0.60s)" [3498, 3465]
  line "P1: VLTC (2m24s+1.12s)" [3542, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3559 | 40 | 156 | 49% | 3563 | 74% |
|  |  | E1 | 3457 | 29 | 296 | 50% | 3459 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3465 | 35 | 220 | 51% | 3460 | 61% |
|  |  | E1 | 3368 | 28 | 326 | 49% | 3379 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3243 | 41 | 162 | 53% | 3221 | 58% |
|  |  | E1 | 3117 | 33 | 256 | 52% | 3101 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3542 | 38 | 254 | 67% | 2861 | 47% |
|  |  | E1 | 3437 | 32 | 320 | 62% | 3021 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3498 | 43 | 214 | 70% | 2732 | 44% |
|  |  | E1 | 3370 | 29 | 384 | 62% | 3027 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3179 | 43 | 220 | 68% | 2553 | 39% |
|  |  | E1 | 3077 | 35 | 272 | 57% | 2776 | 42% |