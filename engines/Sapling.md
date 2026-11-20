# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3071<sub>(+31) | 3317<sub>(0) | 3409<sub>(+18) |  |
| 2.0.0 | 2026-10-21 | 3040 | 3317 | 3391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3056<sub>(+56) | 3255<sub>(-32) | 3348<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3000 | 3287 | 3332 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3000 | 3287 | 3332 |  |
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

Generated: 2026-11-20 05:42:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3040, 3071]
  line "E1: LTC (60.0+0.60s)" [3317, 3317]
  line "E1: VLTC (2m24s+1.12s)" [3391, 3409]
  line "P1: STC (8.0+0.08s)" [3000, 3056]
  line "P1: LTC (60.0+0.60s)" [3287, 3255]
  line "P1: VLTC (2m24s+1.12s)" [3332, 3348]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3348 | 39 | 160 | 49% | 3356 | 74% |
|  |  | E1 | 3409 | 28 | 312 | 50% | 3410 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3255 | 33 | 236 | 51% | 3249 | 61% |
|  |  | E1 | 3317 | 27 | 346 | 48% | 3330 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3056 | 40 | 170 | 53% | 3039 | 58% |
|  |  | E1 | 3071 | 31 | 288 | 51% | 3060 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3391 | 31 | 340 | 62% | 3001 | 53% |
|  |  | P1 | 3332 | 38 | 254 | 67% | 2701 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3317 | 27 | 412 | 61% | 3005 | 53% |
|  |  | P1 | 3287 | 40 | 230 | 69% | 2631 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3000 | 41 | 236 | 67% | 2460 | 40% |
|  |  | E1 | 3040 | 34 | 294 | 57% | 2757 | 43% |